import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, page_url, page_title } = body;

    if (!session_id || !page_url) {
      return NextResponse.json(
        { error: 'Session ID and page URL are required' },
        { status: 400 }
      );
    }

    // Create page view record
    await prisma.page_views.create({
      data: {
        session_id,
        page_url,
        page_title: page_title || null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error tracking page view:', error);
    return NextResponse.json(
      { error: 'Failed to track page view' },
      { status: 500 }
    );
  }
}
