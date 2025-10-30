/**
 * Email Spam Score Testing Script
 *
 * This script helps you test your email configuration and spam score
 * Run this after setting up SPF, DKIM, and DMARC records
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const EMAIL_CONFIG = {
  HOST: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  PORT: parseInt(process.env.EMAIL_PORT || '465'),
  SECURE: process.env.EMAIL_SECURE === 'true' || true,
  USER: process.env.EMAIL_USER || '',
  PASS: process.env.EMAIL_PASS || '',
};

console.log('\n===========================================');
console.log('   Email Spam Score Testing Script');
console.log('===========================================\n');

async function testEmailConfiguration() {
  console.log('📧 Testing Email Configuration...\n');

  // Check if credentials are set
  if (!EMAIL_CONFIG.USER || !EMAIL_CONFIG.PASS) {
    console.error('❌ ERROR: Email credentials not configured!');
    console.log('   Please check your .env.local file\n');
    return false;
  }

  console.log('✅ Email credentials found');
  console.log('   Host:', EMAIL_CONFIG.HOST);
  console.log('   Port:', EMAIL_CONFIG.PORT);
  console.log('   User:', EMAIL_CONFIG.USER);
  console.log('   Secure:', EMAIL_CONFIG.SECURE);

  // Test SMTP connection
  console.log('\n🔌 Testing SMTP connection...');

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.HOST,
      port: EMAIL_CONFIG.PORT,
      secure: EMAIL_CONFIG.SECURE,
      auth: {
        user: EMAIL_CONFIG.USER,
        pass: EMAIL_CONFIG.PASS,
      },
    });

    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    return transporter;
  } catch (error) {
    console.error('❌ SMTP connection failed!');
    console.error('   Error:', error.message);
    return false;
  }
}

async function sendTestEmail(transporter, testEmail) {
  console.log('\n📨 Sending test email...');
  console.log('   To:', testEmail);

  const testEmailContent = {
    from: `"Rauha Wellness" <${EMAIL_CONFIG.USER}>`,
    replyTo: EMAIL_CONFIG.USER,
    to: testEmail,
    subject: 'Test Email - Rauha Wellness Spam Score Check',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Test Email</h1>
            <p style="margin: 10px 0 0 0;">Rauha Wellness Spam Score Check</p>
          </div>
          <div class="content">
            <p>This is a test email to check spam score and deliverability.</p>
            <p>If you received this email, the SMTP configuration is working correctly.</p>
            <p>Please check the spam score at <a href="https://www.mail-tester.com">mail-tester.com</a></p>
          </div>
          <div class="footer">
            <p>Rauha Wellness | rauhawellness.com</p>
            <p>123 Wellness Street, City, Country</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Test Email - Rauha Wellness

This is a test email to check spam score and deliverability.

If you received this email, the SMTP configuration is working correctly.

Please check the spam score at https://www.mail-tester.com

Rauha Wellness | rauhawellness.com
123 Wellness Street, City, Country
    `.trim(),
    headers: {
      'X-Priority': '3',
      'X-Mailer': 'Rauha Wellness Notification System',
      'List-Unsubscribe': `<mailto:${EMAIL_CONFIG.USER}?subject=unsubscribe>`,
      'Precedence': 'bulk',
      'X-Auto-Response-Suppress': 'OOF, DR, RN, NRN, AutoReply',
      'Organization': 'Rauha Wellness',
    },
  };

  try {
    const info = await transporter.sendMail(testEmailContent);
    console.log('✅ Test email sent successfully!');
    console.log('   Message ID:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Failed to send test email');
    console.error('   Error:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('\n🚀 Starting email spam score tests...\n');

  // Test 1: Configuration
  const transporter = await testEmailConfiguration();
  if (!transporter) {
    console.log('\n❌ Email configuration test failed!');
    console.log('   Please fix the configuration and try again.\n');
    return;
  }

  // Test 2: Send to Mail-Tester
  console.log('\n===========================================');
  console.log('   Test Your Spam Score');
  console.log('===========================================\n');
  console.log('Go to: https://www.mail-tester.com');
  console.log('Copy the email address they show you\n');

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Paste the mail-tester email address here: ', async (mailTesterEmail) => {
    readline.close();

    if (!mailTesterEmail || !mailTesterEmail.includes('@')) {
      console.log('\n❌ Invalid email address');
      return;
    }

    const success = await sendTestEmail(transporter, mailTesterEmail);

    if (success) {
      console.log('\n===========================================');
      console.log('   ✅ Test Email Sent Successfully!');
      console.log('===========================================\n');
      console.log('Now:');
      console.log('1. Go back to mail-tester.com');
      console.log('2. Click "Then check your score"');
      console.log('3. Review your spam score (aim for 8/10 or higher)\n');
      console.log('If score is low, check:');
      console.log('- SPF record is configured');
      console.log('- DKIM record is configured');
      console.log('- DMARC record is configured');
      console.log('- Domain is not blacklisted\n');
      console.log('Refer to SPAM_FIX_GUIDE.md for detailed instructions.\n');
    }
  });
}

// Run the tests
runTests().catch(console.error);
