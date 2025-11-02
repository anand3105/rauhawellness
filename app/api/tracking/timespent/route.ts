import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, page_url, time_spent } = body;

    if (!session_id || !page_url) {
      return NextResponse.json(
        { error: 'Session ID and page URL are required' },
        { status: 400 }
      );
    }

    // Find the most recent page view for this session and URL
    const recentView = await prisma.page_views.findFirst({
      where: {
        session_id,
        page_url,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (recentView) {
      // Update time spent
      await prisma.page_views.update({
        where: {
          id: recentView.id,
        },
        data: {
          time_spent,
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating time spent:', error);
    return NextResponse.json(
      { error: 'Failed to update time spent' },
      { status: 500 }
    );
  }
}
