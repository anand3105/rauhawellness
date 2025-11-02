import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      session_id,
      email,
      phone,
      name,
      user_agent,
      referrer,
      landing_page,
      cookies_accepted,
    } = body;

    if (!session_id) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Validate and clean phone number if provided
    let cleanedPhone = phone;
    if (phone) {
      // Remove +91 prefix if present, then remove all non-digit characters
      let phoneStr = phone.trim();
      phoneStr = phoneStr.replace(/^\+91[-\s]?/, ''); // Remove +91, +91-, or +91 prefix
      cleanedPhone = phoneStr.replace(/\D/g, ''); // Remove all non-digits

      if (cleanedPhone.length !== 10) {
        return NextResponse.json(
          { error: 'Phone number must be exactly 10 digits (with or without +91)' },
          { status: 400 }
        );
      }
    }

    // Parse user agent to get device/browser info
    const deviceInfo = parseUserAgent(user_agent || '');

    // Get IP address from headers
    const ip_address =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Check if session already exists
    const existing = await prisma.user_tracking.findUnique({
      where: { session_id },
    });

    if (existing) {
      // Update existing session
      await prisma.user_tracking.update({
        where: { session_id },
        data: {
          cookies_accepted,
          accepted_at: cookies_accepted ? new Date() : existing.accepted_at,
          updated_at: new Date(),
        },
      });
    } else {
      // Create new tracking record
      await prisma.user_tracking.create({
        data: {
          session_id,
          email: email || null,
          phone: cleanedPhone || null,
          name: name || null,
          user_agent,
          ip_address,
          device_type: deviceInfo.device,
          browser: deviceInfo.browser,
          os: deviceInfo.os,
          referrer,
          landing_page,
          cookies_accepted,
          accepted_at: cookies_accepted ? new Date() : null,
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error tracking session:', error);
    return NextResponse.json(
      { error: 'Failed to track session' },
      { status: 500 }
    );
  }
}

function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();

  // Detect device
  let device = 'desktop';
  if (/mobile|android|iphone|ipad|tablet/.test(ua)) {
    device = /tablet|ipad/.test(ua) ? 'tablet' : 'mobile';
  }

  // Detect browser
  let browser = 'unknown';
  if (ua.includes('chrome')) browser = 'Chrome';
  else if (ua.includes('safari')) browser = 'Safari';
  else if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('edge')) browser = 'Edge';
  else if (ua.includes('opera')) browser = 'Opera';

  // Detect OS
  let os = 'unknown';
  if (ua.includes('windows')) os = 'Windows';
  else if (ua.includes('mac')) os = 'MacOS';
  else if (ua.includes('linux')) os = 'Linux';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) os = 'iOS';

  return { device, browser, os };
}
