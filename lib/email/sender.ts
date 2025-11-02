import nodemailer from 'nodemailer';
import { EMAIL_CONFIG, emailTemplates } from './config';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  useGmail?: boolean; // Flag to determine which SMTP to use
}

/**
 * Send an email notification using either Gmail or Hostinger SMTP
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  const smtpType = options.useGmail ? 'GMAIL' : 'HOSTINGER';

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📧 EMAIL SEND ATTEMPT (via ${smtpType})`);
  console.log('To:', options.to);
  console.log('Subject:', options.subject);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  try {
    // Select SMTP config based on recipient type
    const smtpConfig = options.useGmail ? EMAIL_CONFIG.GMAIL : EMAIL_CONFIG.HOSTINGER;

    const transportConfig = {
      host: smtpConfig.HOST,
      port: smtpConfig.PORT,
      secure: smtpConfig.SECURE,
      auth: {
        user: smtpConfig.USER,
        pass: smtpConfig.PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    };

    console.log('Transport config:');
    console.log('  SMTP:', smtpType);
    console.log('  Host:', transportConfig.host);
    console.log('  Port:', transportConfig.port);
    console.log('  Secure:', transportConfig.secure);
    console.log('  User:', transportConfig.auth.user);
    console.log('  Pass:', transportConfig.auth.pass ? '***' + transportConfig.auth.pass.slice(-3) : 'NOT SET');
    console.log('');

    const transporter = nodemailer.createTransport(transportConfig);

    // Verify connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    console.log('');

    // Determine sender based on SMTP type
    const fromEmail = options.useGmail ? smtpConfig.USER : EMAIL_CONFIG.HOSTINGER.USER;
    const fromName = 'Rauha Wellness';

    // Send email
    console.log('Sending email...');
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log('✅ Email sent successfully');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');

    return true;
  } catch (error: any) {
    console.error('❌ Failed to send email');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('');
    return false;
  }
}

/**
 * Send quiz notification to admin (via Hostinger)
 */
export async function sendQuizNotification(quizData: any): Promise<boolean> {
  console.log('📊 Preparing quiz notification for admin...');
  const template = emailTemplates.quizNotification(quizData);

  return await sendEmail({
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: template.subject,
    html: template.html,
    text: template.text,
    useGmail: false, // Use Hostinger for admin emails
  });
}

/**
 * Send waitlist notification to admin (via Hostinger)
 */
export async function sendWaitlistNotification(waitlistData: any): Promise<boolean> {
  console.log('📋 Preparing waitlist notification for admin...');
  const template = emailTemplates.waitlistNotification(waitlistData);

  return await sendEmail({
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: template.subject,
    html: template.html,
    text: template.text,
    useGmail: false, // Use Hostinger for admin emails
  });
}

/**
 * Send waitlist confirmation to customer (via Hostinger)
 */
export async function sendWaitlistConfirmation(waitlistData: any): Promise<boolean> {
  console.log('💌 Preparing waitlist confirmation for customer...');
  const template = emailTemplates.waitlistConfirmation(waitlistData);

  return await sendEmail({
    to: waitlistData.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
    useGmail: false, // Use Hostinger for customer emails
  });
}

/**
 * Send quiz confirmation to customer (via Hostinger)
 */
export async function sendQuizConfirmation(quizData: any): Promise<boolean> {
  console.log('💌 Preparing quiz confirmation for customer...');
  const template = emailTemplates.quizConfirmation(quizData);

  return await sendEmail({
    to: quizData.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
    useGmail: false, // Use Hostinger for customer emails
  });
}

/**
 * Send newsletter confirmation to customer (via Hostinger)
 */
export async function sendNewsletterConfirmation(email: string): Promise<boolean> {
  console.log('💌 Preparing newsletter confirmation for customer...');
  const template = emailTemplates.newsletterConfirmation({ email });

  return await sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
    text: template.text,
    useGmail: false, // Use Hostinger for customer emails
  });
}
