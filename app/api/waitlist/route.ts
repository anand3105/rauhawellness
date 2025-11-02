import { NextRequest, NextResponse } from 'next/server';
import { sendWaitlistNotification, sendWaitlistConfirmation } from '@/lib/email/sender';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface WaitlistEntry {
  email?: string;
  phone?: string;
  selectedProduct: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║           📋 WAITLIST SUBMISSION RECEIVED                 ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');

  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    const body = await request.json();

    console.log('Received data:', {
      email: body.email || 'MISSING',
      phone: body.phone || 'MISSING',
      selectedProduct: body.selectedProduct || 'MISSING'
    });

    // Validate required fields - need either email or phone
    if ((!body.email && !body.phone) || !body.selectedProduct) {
      console.error('❌ Validation failed:', {
        hasEmail: !!body.email,
        hasPhone: !!body.phone,
        hasSelectedProduct: !!body.selectedProduct
      });
      return NextResponse.json(
        { error: 'Missing required fields: (email or phone) and selectedProduct' },
        { status: 400 }
      );
    }

    // Basic email validation if email is provided
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Phone number validation if phone is provided
    if (body.phone) {
      // Remove +91 prefix if present, then remove all non-digit characters
      let phoneStr = body.phone.trim();
      phoneStr = phoneStr.replace(/^\+91[-\s]?/, ''); // Remove +91, +91-, or +91 prefix
      const cleanedPhone = phoneStr.replace(/\D/g, ''); // Remove all non-digits

      if (cleanedPhone.length !== 10) {
        return NextResponse.json(
          { error: 'Phone number must be exactly 10 digits (with or without +91)' },
          { status: 400 }
        );
      }

      // Update body.phone to cleaned version (10 digits only)
      body.phone = cleanedPhone;
    }

    // Save to database
    try {
      await prisma.waitlists.create({
        data: {
          email: body.email || null,
          phone: body.phone || null,
          name: body.selectedProduct,
        },
      });
      console.log('✅ Waitlist entry saved to database');
    } catch (dbError: any) {
      // Handle duplicate
      if (dbError.code === 'P2002') {
        return NextResponse.json(
          { error: 'This contact is already on the waitlist' },
          { status: 409 }
        );
      }
      console.error('❌ Database error:', dbError);
      throw dbError;
    }

    // Create entry data
    const newEntry: WaitlistEntry = {
      email: body.email,
      phone: body.phone,
      selectedProduct: body.selectedProduct,
      timestamp: new Date().toISOString(),
    };

    console.log('✅ Waitlist data validated and formatted');
    console.log(JSON.stringify(newEntry, null, 2));
    console.log('');

    // Send emails
    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║           📧 SENDING EMAIL NOTIFICATIONS                  ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log('');

    let adminSuccess = false;
    let customerSuccess = false;

    // 1. Send to admin
    try {
      console.log('→ Sending admin notification...\n');
      adminSuccess = await sendWaitlistNotification(newEntry);
      if (adminSuccess) {
        console.log('✅ Admin notification: SUCCESS\n');
      } else {
        console.error('⚠️ Admin notification: FAILED (returned false)\n');
      }
    } catch (error: any) {
      console.error('❌ Admin notification: EXCEPTION');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      console.error('');
    }

    // 2. Send to customer
    try {
      console.log('→ Sending customer confirmation...\n');
      customerSuccess = await sendWaitlistConfirmation(newEntry);
      if (customerSuccess) {
        console.log('✅ Customer confirmation: SUCCESS\n');
      } else {
        console.error('⚠️ Customer confirmation: FAILED (returned false)\n');
      }
    } catch (error: any) {
      console.error('❌ Customer confirmation: EXCEPTION');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      console.error('');
    }

    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║           📊 EMAIL SUMMARY                                ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log('Admin notification:', adminSuccess ? '✅ SENT' : '❌ FAILED');
    console.log('Customer confirmation:', customerSuccess ? '✅ SENT' : '❌ FAILED');
    console.log('');

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
        data: newEntry,
        emailStatus: {
          adminNotification: adminSuccess,
          customerConfirmation: customerSuccess
        }
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('❌ Error processing waitlist submission:', error);
    console.error('Stack:', error.stack);
    return NextResponse.json(
      { error: 'Failed to process waitlist submission', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const waitlist = await prisma.waitlists.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        count: waitlist.length,
        data: waitlist
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching waitlist entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist entries' },
      { status: 500 }
    );
  }
}
