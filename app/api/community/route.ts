import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface CommunityMember {
  email?: string;
  phone?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║        👥 COMMUNITY MEMBER SUBMISSION RECEIVED            ║');
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
      source: body.source || 'hero_form'
    });

    // Validate required fields - need either email or phone
    if (!body.email && !body.phone) {
      console.error('❌ Validation failed: Need either email or phone');
      return NextResponse.json(
        { error: 'Please provide either email or phone number' },
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
      const newMember = await prisma.community_members.create({
        data: {
          email: body.email || null,
          phone: body.phone || null,
          source: body.source || 'hero_form',
        },
      });
      console.log('✅ Community member saved to database:', newMember.id);

      return NextResponse.json(
        {
          success: true,
          message: 'Welcome to the Rauha community!',
          data: {
            id: newMember.id,
            email: newMember.email,
            phone: newMember.phone,
            source: newMember.source,
            created_at: newMember.created_at,
          }
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error('❌ Database error:', dbError);

      // Handle duplicate entry
      if (dbError.code === 'P2002') {
        return NextResponse.json(
          { error: 'You are already part of our community!' },
          { status: 409 }
        );
      }

      throw dbError;
    }

  } catch (error: any) {
    console.error('❌ Error processing community submission:', error);
    console.error('Stack:', error.stack);
    return NextResponse.json(
      { error: 'Failed to process submission', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const members = await prisma.community_members.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        count: members.length,
        data: members
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching community members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch community members' },
      { status: 500 }
    );
  }
}
