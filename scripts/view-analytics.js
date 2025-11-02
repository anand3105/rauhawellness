const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function viewAnalytics() {
  try {
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║              USER TRACKING ANALYTICS                      ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    // Get overview statistics
    const totalSessions = await prisma.user_tracking.count();
    const acceptedSessions = await prisma.user_tracking.count({
      where: { cookies_accepted: true },
    });
    const declinedSessions = await prisma.user_tracking.count({
      where: { cookies_accepted: false },
    });
    const totalPageViews = await prisma.page_views.count();
    const totalEvents = await prisma.user_events.count();

    const acceptanceRate = totalSessions > 0
      ? ((acceptedSessions / totalSessions) * 100).toFixed(2)
      : 0;

    console.log('📊 OVERVIEW STATISTICS');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Total Sessions: ${totalSessions}`);
    console.log(`Cookies Accepted: ${acceptedSessions}`);
    console.log(`Cookies Declined: ${declinedSessions}`);
    console.log(`Acceptance Rate: ${acceptanceRate}%`);
    console.log(`Total Page Views: ${totalPageViews}`);
    console.log(`Total Events: ${totalEvents}`);
    console.log('');

    // Recent sessions
    const recentSessions = await prisma.user_tracking.findMany({
      take: 10,
      orderBy: { created_at: 'desc' },
    });

    console.log('👥 RECENT SESSIONS (Last 10)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    recentSessions.forEach((session, index) => {
      console.log(`\n${index + 1}. Session ID: ${session.session_id}`);
      console.log(`   Device: ${session.device_type || 'N/A'} | Browser: ${session.browser || 'N/A'} | OS: ${session.os || 'N/A'}`);
      console.log(`   IP: ${session.ip_address || 'N/A'} | Location: ${session.city || 'N/A'}, ${session.country || 'N/A'}`);
      console.log(`   Referrer: ${session.referrer || 'Direct'}`);
      console.log(`   Landing Page: ${session.landing_page || 'N/A'}`);
      console.log(`   Cookies: ${session.cookies_accepted ? '✅ Accepted' : '❌ Declined'}`);
      console.log(`   Created: ${session.created_at}`);
    });
    console.log('');

    // Device breakdown
    const deviceStats = await prisma.$queryRaw`
      SELECT device_type, COUNT(*) as count
      FROM user_tracking
      WHERE device_type IS NOT NULL
      GROUP BY device_type
    `;

    console.log('📱 DEVICE BREAKDOWN');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    deviceStats.forEach(stat => {
      console.log(`${stat.device_type}: ${stat.count} sessions`);
    });
    console.log('');

    // Browser breakdown
    const browserStats = await prisma.$queryRaw`
      SELECT browser, COUNT(*) as count
      FROM user_tracking
      WHERE browser IS NOT NULL
      GROUP BY browser
      ORDER BY count DESC
    `;

    console.log('🌐 BROWSER BREAKDOWN');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    browserStats.forEach(stat => {
      console.log(`${stat.browser}: ${stat.count} sessions`);
    });
    console.log('');

    // Top pages
    const topPages = await prisma.$queryRaw`
      SELECT page_url, COUNT(*) as views
      FROM page_views
      GROUP BY page_url
      ORDER BY views DESC
      LIMIT 10
    `;

    console.log('📄 TOP 10 PAGES');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    topPages.forEach((page, index) => {
      console.log(`${index + 1}. ${page.page_url} - ${page.views} views`);
    });
    console.log('');

    // Event types
    const eventTypes = await prisma.$queryRaw`
      SELECT event_type, COUNT(*) as count
      FROM user_events
      GROUP BY event_type
      ORDER BY count DESC
    `;

    console.log('🎯 EVENT TYPES');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    eventTypes.forEach(event => {
      console.log(`${event.event_type}: ${event.count} events`);
    });
    console.log('');

  } catch (error) {
    console.error('❌ Error fetching analytics:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewAnalytics();
