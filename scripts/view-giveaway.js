const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function viewGiveawayEntries() {
  try {
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║           GIVEAWAY CONTEST ENTRIES                        ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    // All Giveaway Entries
    const entries = await prisma.giveaway_entries.findMany({
      orderBy: { created_at: 'desc' }
    });

    console.log('🎁 TOTAL GIVEAWAY ENTRIES:', entries.length);
    console.log('\n');

    if (entries.length > 0) {
      console.log('Recent Entries:');
      console.log('─'.repeat(80));
      entries.forEach((entry, index) => {
        console.log(`\n#${index + 1} - ${entry.name}`);
        console.log(`   Contact: ${entry.email || entry.phone || 'N/A'}`);
        console.log(`   Instagram: ${entry.instagram_handle}`);
        console.log(`   Skin Type: ${entry.skin_type}`);
        console.log(`   Prefers: ${entry.product_preference === 'kumkumadi' ? '🌟 Kumkumadi Oil' : '🌹 Rosehip Oil'}`);
        console.log(`   Source: ${entry.entry_source}`);
        console.log(`   Entered: ${entry.created_at ? new Date(entry.created_at).toLocaleString() : 'N/A'}`);
      });
      console.log('\n' + '─'.repeat(80));
    }

    // Statistics by Skin Type
    const skinTypeStats = await prisma.giveaway_entries.groupBy({
      by: ['skin_type'],
      _count: true,
    });

    console.log('\n📊 STATISTICS BY SKIN TYPE:');
    console.log('─'.repeat(40));
    skinTypeStats.forEach(stat => {
      console.log(`${stat.skin_type.padEnd(15)} : ${stat._count}`);
    });

    // Statistics by Product Preference
    const productStats = await prisma.giveaway_entries.groupBy({
      by: ['product_preference'],
      _count: true,
    });

    console.log('\n📊 STATISTICS BY PRODUCT PREFERENCE:');
    console.log('─'.repeat(40));
    productStats.forEach(stat => {
      const productName = stat.product_preference === 'kumkumadi' ? '🌟 Kumkumadi Oil' : '🌹 Rosehip Oil';
      console.log(`${productName.padEnd(20)} : ${stat._count}`);
    });

    // Top Instagram Handles (sample)
    console.log('\n📱 INSTAGRAM HANDLES:');
    console.log('─'.repeat(40));
    entries.slice(0, 10).forEach(entry => {
      console.log(`   ${entry.instagram_handle} - ${entry.name}`);
    });
    if (entries.length > 10) {
      console.log(`   ... and ${entries.length - 10} more`);
    }

    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║              SUMMARY                                      ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log(`Total Entries: ${entries.length}`);
    console.log(`Entries with Email: ${entries.filter(e => e.email).length}`);
    console.log(`Entries with Phone: ${entries.filter(e => e.phone).length}`);
    console.log(`Most Popular Skin Type: ${skinTypeStats.sort((a, b) => b._count - a._count)[0]?.skin_type || 'N/A'}`);
    console.log(`Most Preferred Product: ${productStats.sort((a, b) => b._count - a._count)[0]?.product_preference || 'N/A'}`);

    // Recent Entries (Last 24 hours)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const recentEntries = entries.filter(e => e.created_at && new Date(e.created_at) > yesterday);
    console.log(`Entries (Last 24h): ${recentEntries.length}`);

    console.log('');

  } catch (error) {
    console.error('❌ Error fetching giveaway data:', error);
    console.error('Error details:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

viewGiveawayEntries();
