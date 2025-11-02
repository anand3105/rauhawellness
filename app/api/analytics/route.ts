import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Get all tracking data with statistics
    const [
      totalSessions,
      acceptedSessions,
      declinedSessions,
      totalPageViews,
      totalEvents,
      recentSessions,
      topPages,
      deviceStats,
      browserStats,
    ] = await Promise.all([
      // Total sessions
      prisma.user_tracking.count(),

      // Accepted cookies
      prisma.user_tracking.count({
        where: { cookies_accepted: true },
      }),

      // Declined cookies
      prisma.user_tracking.count({
        where: { cookies_accepted: false },
      }),

      // Total page views
      prisma.page_views.count(),

      // Total events
      prisma.user_events.count(),

      // Recent sessions
      prisma.user_tracking.findMany({
        take: 10,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          session_id: true,
          device_type: true,
          browser: true,
          os: true,
          country: true,
          city: true,
          referrer: true,
          landing_page: true,
          cookies_accepted: true,
          created_at: true,
        },
      }),

      // Top pages
      prisma.$queryRaw`
        SELECT page_url, COUNT(*) as views
        FROM page_views
        GROUP BY page_url
        ORDER BY views DESC
        LIMIT 10
      `,

      // Device statistics
      prisma.$queryRaw`
        SELECT device_type, COUNT(*) as count
        FROM user_tracking
        WHERE device_type IS NOT NULL
        GROUP BY device_type
      `,

      // Browser statistics
      prisma.$queryRaw`
        SELECT browser, COUNT(*) as count
        FROM user_tracking
        WHERE browser IS NOT NULL
        GROUP BY browser
        ORDER BY count DESC
        LIMIT 5
      `,
    ]);

    // Calculate acceptance rate
    const acceptanceRate = totalSessions > 0
      ? ((acceptedSessions / totalSessions) * 100).toFixed(2)
      : '0';

    return NextResponse.json({
      success: true,
      data: {
        overview: {
          totalSessions,
          acceptedSessions,
          declinedSessions,
          acceptanceRate: `${acceptanceRate}%`,
          totalPageViews,
          totalEvents,
        },
        recentSessions,
        topPages,
        deviceStats,
        browserStats,
      },
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
