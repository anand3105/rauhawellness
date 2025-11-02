const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testAdminEmail() {
  console.log('\n🧪 Testing email to ADMIN (info@rauhawellness.com)\n');

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
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@rauhawellness.com',
      subject: '✅ TEST - Admin Notification Working',
      html: '<h1>🎉 SUCCESS!</h1><p>This email proves your admin notifications ARE working!</p><p>When customers submit forms, YOU WILL receive these notifications.</p><p><strong>Time:</strong> ' + new Date().toLocaleString() + '</p>',
      text: 'SUCCESS! Admin notifications are working. Time: ' + new Date().toLocaleString()
    });

    console.log('✅ Email sent to admin!');
    console.log('Message ID:', info.messageId);
    console.log('\n📬 NOW CHECK: info@rauhawellness.com inbox');
    console.log('   Login at: https://webmail.hostinger.com\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAdminEmail();
