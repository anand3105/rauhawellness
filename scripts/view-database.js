const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function viewAllData() {
  try {
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║              DATABASE CONTENTS                            ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    // Newsletter Subscriptions
    const newsletters = await prisma.newsletters.findMany({
      orderBy: { created_at: 'desc' }
    });
    console.log('📬 NEWSLETTER SUBSCRIPTIONS:', newsletters.length);
    console.log(JSON.stringify(newsletters, null, 2));
    console.log('\n');

    // Waitlist Entries
    const waitlists = await prisma.waitlists.findMany({
      orderBy: { created_at: 'desc' }
    });
    console.log('📋 WAITLIST ENTRIES:', waitlists.length);
    console.log(JSON.stringify(waitlists, null, 2));
    console.log('\n');

    // Quiz Results
    const quizResults = await prisma.quiz_results.findMany({
      orderBy: { created_at: 'desc' }
    });
    console.log('📝 QUIZ RESULTS:', quizResults.length);
    console.log(JSON.stringify(quizResults, null, 2));
    console.log('\n');

    // Users
    const users = await prisma.users.findMany({
      orderBy: { created_at: 'desc' }
    });
    console.log('👥 USERS:', users.length);
    console.log(JSON.stringify(users, null, 2));
    console.log('\n');

    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║              SUMMARY                                      ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log(`Total Newsletter Subscriptions: ${newsletters.length}`);
    console.log(`Total Waitlist Entries: ${waitlists.length}`);
    console.log(`Total Quiz Results: ${quizResults.length}`);
    console.log(`Total Users: ${users.length}`);
    console.log('');

  } catch (error) {
    console.error('❌ Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewAllData();
