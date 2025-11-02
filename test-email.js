// Test Email Script
// Run this with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing Email Configuration...\n');

  console.log('📋 Configuration:');
  console.log('   Host:', process.env.EMAIL_HOST);
  console.log('   Port:', process.env.EMAIL_PORT);
  console.log('   Secure:', process.env.EMAIL_SECURE);
  console.log('   User:', process.env.EMAIL_USER);
  console.log('   Pass:', process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET');
  console.log('   Admin Email:', process.env.ADMIN_EMAIL);
  console.log('');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ ERROR: Email credentials not set in .env.local');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
      logger: true, // Log information
    });

    console.log('🔌 Testing connection to SMTP server...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    console.log('📧 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Rauha Wellness Test" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: '✅ Test Email from Rauha Wellness',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 30px; text-align: center; border-radius: 10px; }
            .content { background: #f9f9f9; padding: 30px; margin-top: 20px; border-radius: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Email System Working!</h1>
            </div>
            <div class="content">
              <p><strong>Great news!</strong></p>
              <p>Your Rauha Wellness email system is configured correctly and working perfectly!</p>
              <p><strong>Configuration Details:</strong></p>
              <ul>
                <li>Host: ${process.env.EMAIL_HOST}</li>
                <li>Port: ${process.env.EMAIL_PORT}</li>
                <li>From: ${process.env.EMAIL_USER}</li>
              </ul>
              <p>Test sent at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Email System Test - Rauha Wellness

Your email system is working correctly!

Configuration:
- Host: ${process.env.EMAIL_HOST}
- Port: ${process.env.EMAIL_PORT}
- From: ${process.env.EMAIL_USER}

Test sent at: ${new Date().toLocaleString()}
      `.trim(),
    });

    console.log('✅ Test email sent successfully!');
    console.log('   Message ID:', info.messageId);
    console.log('   Check inbox:', process.env.ADMIN_EMAIL);
    console.log('\n🎉 Email system is working correctly!');

  } catch (error) {
    console.error('\n❌ ERROR sending test email:');
    console.error(error);
    console.error('\n💡 Troubleshooting tips:');
    console.error('   1. Check your email password in .env.local');
    console.error('   2. Verify SMTP is enabled in Hostinger control panel');
    console.error('   3. Check if your Hostinger email account is active');
    console.error('   4. Try logging into webmail with these credentials');
  }
}

testEmail();
