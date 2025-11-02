const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function viewCommunityMembers() {
  try {
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║              👥 COMMUNITY MEMBERS                         ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const members = await prisma.community_members.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    if (members.length === 0) {
      console.log('No community members yet.\n');
      return;
    }

    console.log(`Total Members: ${members.length}\n`);

    // Group by source
    const bySource = {};
    members.forEach(member => {
      const source = member.source || 'unknown';
      if (!bySource[source]) {
        bySource[source] = [];
      }
      bySource[source].push(member);
    });

    Object.keys(bySource).forEach(source => {
      console.log(`\n📍 Source: ${source} (${bySource[source].length} members)`);
      console.log('─'.repeat(70));

      bySource[source].forEach(member => {
        console.log(`ID: ${member.id}`);
        if (member.email) console.log(`  Email: ${member.email}`);
        if (member.phone) console.log(`  Phone: ${member.phone}`);
        console.log(`  Joined: ${member.created_at?.toLocaleString()}`);
        console.log();
      });
    });

    // Statistics
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║                    STATISTICS                              ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const emailCount = members.filter(m => m.email).length;
    const phoneCount = members.filter(m => m.phone).length;

    console.log(`Total Members:     ${members.length}`);
    console.log(`With Email:        ${emailCount}`);
    console.log(`With Phone:        ${phoneCount}`);
    console.log();

  } catch (error) {
    console.error('Error fetching community members:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewCommunityMembers();
