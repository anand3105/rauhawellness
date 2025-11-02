import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, email, phone, name } = body;

    if (!session_id) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Validate phone number if provided
    if (phone) {
      // Remove +91 prefix if present, then remove all non-digit characters
      let phoneStr = phone.trim();
      phoneStr = phoneStr.replace(/^\+91[-\s]?/, ''); // Remove +91, +91-, or +91 prefix
      const cleanedPhone = phoneStr.replace(/\D/g, ''); // Remove all non-digits

      if (cleanedPhone.length !== 10) {
        return NextResponse.json(
          { error: 'Phone number must be exactly 10 digits (with or without +91)' },
          { status: 400 }
        );
      }
    }

    // Update user tracking with captured data
    const updateData: any = {};
    if (email) updateData.email = email;
    if (phone) {
      // Remove +91 prefix and store only 10 digits
      let phoneStr = phone.trim();
      phoneStr = phoneStr.replace(/^\+91[-\s]?/, '');
      updateData.phone = phoneStr.replace(/\D/g, '');
    }
    if (name) updateData.name = name;

    if (Object.keys(updateData).length > 0) {
      await prisma.user_tracking.update({
        where: { session_id },
        data: updateData,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating user data:', error);
    return NextResponse.json(
      { error: 'Failed to update user data' },
      { status: 500 }
    );
  }
}
