const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function diagnosticTest() {
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║           🔍 DETAILED EMAIL DIAGNOSTIC TEST               ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  console.log('Configuration:');
  console.log('  HOST:', process.env.EMAIL_HOST);
  console.log('  PORT:', process.env.EMAIL_PORT);
  console.log('  SECURE:', process.env.EMAIL_SECURE);
  console.log('  USER:', process.env.EMAIL_USER);
  console.log('  PASS:', process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-3) : 'NOT SET');
  console.log('');

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    debug: true,
    logger: true
  });

  try {
    console.log('Step 1: Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful\n');

    console.log('Step 2: Sending test email to er.anand360@gmail.com...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'er.anand360@gmail.com',
      subject: 'URGENT TEST - Rauha Email System',
      text: 'If you receive this, your email system is working. Time sent: ' + new Date().toISOString(),
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });

    console.log('\n✅ Email accepted by server');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
    console.log('Pending:', info.pending);
    console.log('');

    if (info.rejected && info.rejected.length > 0) {
      console.error('⚠️ WARNING: Email was rejected by server!');
      console.error('Rejected addresses:', info.rejected);
    }

    console.log('\n📋 DIAGNOSTIC SUMMARY:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ SMTP connection: SUCCESS');
    console.log('✅ Email accepted by Hostinger: SUCCESS');
    console.log('✅ Message queued for delivery: SUCCESS');
    console.log('');
    console.log('⏳ Email should arrive within 1-5 minutes');
    console.log('');
    console.log('If you still don\'t receive it, check:');
    console.log('  1. Gmail SPAM folder');
    console.log('  2. Gmail Promotions tab');
    console.log('  3. Gmail Social tab');
    console.log('  4. Contact Hostinger support - they may have sending limits');
    console.log('');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('Code:', error.code);
    console.error('\nFull error:', error);
  }
}

diagnosticTest();
