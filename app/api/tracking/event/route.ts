import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, event_type, event_data } = body;

    if (!session_id || !event_type) {
      return NextResponse.json(
        { error: 'Session ID and event type are required' },
        { status: 400 }
      );
    }

    // Create event record
    await prisma.user_events.create({
      data: {
        session_id,
        event_type,
        event_data: event_data || null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error tracking event:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}
