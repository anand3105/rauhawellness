import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { sendWaitlistNotification, sendWaitlistConfirmation } from '@/lib/email/sender';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface WaitlistEntry {
  email: string;
  selectedProduct: string;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read existing waitlist entries
async function readWaitlistData(): Promise<WaitlistEntry[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write waitlist entries
async function writeWaitlistData(data: WaitlistEntry[]) {
  await ensureDataDir();
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    const body = await request.json();

    console.log('📝 Waitlist API received:', {
      email: body.email || 'MISSING',
      selectedProduct: body.selectedProduct || 'MISSING'
    });

    // Validate required fields
    if (!body.email || !body.selectedProduct) {
      console.error('❌ Validation failed:', {
        hasEmail: !!body.email,
        hasSelectedProduct: !!body.selectedProduct
      });
      return NextResponse.json(
        { error: 'Missing required fields: email and selectedProduct' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Read existing data
    const waitlistData = await readWaitlistData();

    // Check if email already exists
    const existingEntry = waitlistData.find(entry => entry.email === body.email);
    if (existingEntry) {
      return NextResponse.json(
        {
          success: true,
          message: 'Email already on waitlist',
          data: existingEntry
        },
        { status: 200 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: body.email,
      selectedProduct: body.selectedProduct,
      timestamp: new Date().toISOString(),
    };

    waitlistData.push(newEntry);

    // Save updated data
    await writeWaitlistData(waitlistData);
    console.log('✅ Waitlist data saved successfully');

    // Send email notifications (don't wait for them, don't block the response)
    console.log('📤 Sending email notifications...');

    // 1. Notify admin
    sendWaitlistNotification(newEntry).catch(error => {
      console.error('❌ Failed to send admin notification:', error);
    });

    // 2. Send confirmation to customer
    sendWaitlistConfirmation(newEntry).catch(error => {
      console.error('❌ Failed to send customer confirmation:', error);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
        data: newEntry
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to save to waitlist' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const waitlistData = await readWaitlistData();

    return NextResponse.json(
      {
        success: true,
        count: waitlistData.length,
        data: waitlistData
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error reading waitlist data:', error);
    return NextResponse.json(
      { error: 'Failed to read waitlist data' },
      { status: 500 }
    );
  }
}
