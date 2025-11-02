const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function sendTestToPersonal() {
  console.log('\n🧪 SENDING TEST EMAIL TO: er.anand360@gmail.com\n');

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Test 1: Send customer confirmation
    console.log('📧 Test 1: Sending CUSTOMER CONFIRMATION...');
    const info1 = await transporter.sendMail({
      from: '"Rauha Wellness" <' + process.env.EMAIL_USER + '>',
      to: 'er.anand360@gmail.com',
      subject: '🎉 Test: You\'re on the Rauha Wellness Waitlist!',
      html: '<h1>🎉 Welcome to Rauha Wellness!</h1><p>This is a test email to confirm your email system is working.</p><p><strong>Discount Code: EARLY15</strong></p><p>Save 15% on your first purchase!</p>',
      text: 'Welcome to Rauha Wellness! Discount Code: EARLY15 - Save 15% on your first purchase!'
    });
    console.log('✅ Customer email sent! Message ID:', info1.messageId);

    // Test 2: Send admin notification  
    console.log('\n📧 Test 2: Sending ADMIN NOTIFICATION...');
    const info2 = await transporter.sendMail({
      from: '"Rauha Wellness" <' + process.env.EMAIL_USER + '>',
      to: process.env.ADMIN_EMAIL,
      subject: '🎉 Test: New Waitlist Sign-up - Kumkumadi Oil',
      html: '<h1>🎉 New Waitlist Sign-up</h1><p><strong>Email:</strong> er.anand360@gmail.com</p><p><strong>Product:</strong> Kumkumadi Oil</p><p><strong>Time:</strong> ' + new Date().toLocaleString() + '</p>',
      text: 'New Waitlist Sign-up\n\nEmail: er.anand360@gmail.com\nProduct: Kumkumadi Oil\nTime: ' + new Date().toLocaleString()
    });
    console.log('✅ Admin email sent! Message ID:', info2.messageId);

    console.log('\n✅ BOTH EMAILS SENT SUCCESSFULLY!\n');
    console.log('📬 Check these inboxes:');
    console.log('   1. er.anand360@gmail.com (customer confirmation)');
    console.log('   2. info@rauhawellness.com (admin notification)\n');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

sendTestToPersonal();
