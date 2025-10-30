import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { sendEmail } from '@/lib/email/sender';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface NewsletterEntry {
  email: string;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read existing newsletter entries
async function readNewsletterData(): Promise<NewsletterEntry[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(NEWSLETTER_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write newsletter entries
async function writeNewsletterData(data: NewsletterEntry[]) {
  await ensureDataDir();
  await fs.writeFile(NEWSLETTER_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('📝 Newsletter API received:', {
      email: body.email || 'MISSING'
    });

    // Validate required fields
    if (!body.email) {
      console.error('❌ Validation failed: No email provided');
      return NextResponse.json(
        { error: 'Email is required' },
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
    const newsletterData = await readNewsletterData();

    // Check if email already exists
    const existingEntry = newsletterData.find(entry => entry.email === body.email);
    if (existingEntry) {
      return NextResponse.json(
        {
          success: true,
          message: 'You are already subscribed to our newsletter!',
          data: existingEntry
        },
        { status: 200 }
      );
    }

    // Add new entry
    const newEntry: NewsletterEntry = {
      email: body.email,
      timestamp: new Date().toISOString(),
    };

    newsletterData.push(newEntry);

    // Save updated data
    await writeNewsletterData(newsletterData);
    console.log('✅ Newsletter subscription saved successfully');

    // Send notification email to admin
    sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@rauhawellness.com',
      subject: '📬 New Newsletter Subscription - Rauha Wellness',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #C9A871; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-box { background: white; padding: 15px; border-left: 4px solid #C9A871; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Newsletter Subscription</h1>
            </div>
            <div class="content">
              <p>Great news! Someone new wants to join the Rauha Wellness community.</p>

              <div class="info-box">
                <p><strong>📧 Email:</strong> ${body.email}</p>
                <p><strong>📅 Subscribed:</strong> ${new Date().toLocaleString()}</p>
              </div>

              <p>Total newsletter subscribers: <strong>${newsletterData.length}</strong></p>

              <div class="footer">
                <p>Rauha Wellness - Admin Notification</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Newsletter Subscription\n\nEmail: ${body.email}\nSubscribed: ${new Date().toLocaleString()}\n\nTotal subscribers: ${newsletterData.length}`
    }).catch(error => {
      console.error('❌ Failed to send admin notification:', error);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: newEntry
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const newsletterData = await readNewsletterData();

    return NextResponse.json(
      {
        success: true,
        count: newsletterData.length,
        data: newsletterData
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error reading newsletter data:', error);
    return NextResponse.json(
      { error: 'Failed to read newsletter data' },
      { status: 500 }
    );
  }
}
