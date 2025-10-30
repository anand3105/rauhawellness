// Direct email test script
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('========================================');
  console.log('Testing Hostinger Email Configuration');
  console.log('========================================\n');

  console.log('Configuration:');
  console.log('  ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
  console.log('  EMAIL_HOST:', process.env.EMAIL_HOST);
  console.log('  EMAIL_PORT:', process.env.EMAIL_PORT);
  console.log('  EMAIL_SECURE:', process.env.EMAIL_SECURE);
  console.log('  EMAIL_USER:', process.env.EMAIL_USER);
  console.log('  EMAIL_PASS:', process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-3) : 'NOT SET');
  console.log('');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Email credentials not configured!');
    console.error('   Check your .env.local file');
    return;
  }

  try {
    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
      logger: true,
    });

    console.log('✓ Transporter created\n');

    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✓ Connection verified!\n');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Rauha Wellness" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: '🧪 Test Email - Rauha Wellness',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #C98A53;">✅ Email Test Successful!</h1>
          <p>This is a test email from your Rauha Wellness website.</p>
          <p><strong>Sent from:</strong> ${process.env.EMAIL_USER}</p>
          <p><strong>Sent to:</strong> ${process.env.ADMIN_EMAIL}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            If you received this email, your email configuration is working correctly!
          </p>
        </body>
        </html>
      `,
      text: `
Test Email - Rauha Wellness

✅ Email Test Successful!

This is a test email from your Rauha Wellness website.

Sent from: ${process.env.EMAIL_USER}
Sent to: ${process.env.ADMIN_EMAIL}
Time: ${new Date().toLocaleString()}

If you received this email, your email configuration is working correctly!
      `.trim(),
    });

    console.log('\n========================================');
    console.log('✅ TEST EMAIL SENT SUCCESSFULLY!');
    console.log('========================================');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\nCheck your inbox at:', process.env.ADMIN_EMAIL);
    console.log('========================================\n');

  } catch (error) {
    console.log('\n========================================');
    console.log('❌ EMAIL TEST FAILED');
    console.log('========================================');
    console.error('Error:', error.message);
    console.error('\nFull error:', error);
    console.log('========================================\n');

    console.log('Common Solutions:');
    console.log('1. Verify email and password are correct');
    console.log('2. Try port 587 instead of 465');
    console.log('3. Check Hostinger email account is active');
    console.log('4. Verify info@rauhawellness.com exists in Hostinger');
    console.log('');
  }
}

testEmail();
