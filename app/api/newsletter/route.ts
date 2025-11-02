import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, sendNewsletterConfirmation } from '@/lib/email/sender';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface NewsletterEntry {
  email: string;
  timestamp: string;
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

    // Save to database
    try {
      await prisma.newsletters.create({
        data: {
          email: body.email,
        },
      });
      console.log('✅ Newsletter subscription saved to database');
    } catch (dbError: any) {
      // Handle duplicate email
      if (dbError.code === 'P2002') {
        return NextResponse.json(
          { error: 'This email is already subscribed to the newsletter' },
          { status: 409 }
        );
      }
      console.error('❌ Database error:', dbError);
      throw dbError;
    }

    // Create entry data
    const newEntry: NewsletterEntry = {
      email: body.email,
      timestamp: new Date().toISOString(),
    };

    // Log the submission (visible in Vercel logs)
    console.log('✅ New Newsletter Subscription:', JSON.stringify(newEntry, null, 2));

    // Send confirmation email to customer
    sendNewsletterConfirmation(body.email).catch(error => {
      console.error('❌ Failed to send customer confirmation:', error);
    });

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

              <div class="footer">
                <p>Rauha Wellness - Admin Notification</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Newsletter Subscription\n\nEmail: ${body.email}\nSubscribed: ${new Date().toLocaleString()}`
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
    console.error('❌ Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscriptions = await prisma.newsletters.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        count: subscriptions.length,
        data: subscriptions
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching newsletter subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter subscriptions' },
      { status: 500 }
    );
  }
}
