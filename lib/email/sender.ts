import { EMAIL_CONFIG, emailTemplates } from './config';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
}

/**
 * Send an email notification
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  console.log('📧 Attempting to send email...');
  console.log('   From:', EMAIL_CONFIG.USER);
  console.log('   To:', options.to);
  console.log('   Subject:', options.subject);

  try {
    // Dynamically import nodemailer only when needed (server-side only)
    const nodemailer = await import('nodemailer');

    // Check if email credentials are configured
    if (!EMAIL_CONFIG.USER || !EMAIL_CONFIG.PASS) {
      console.log('❌ Email credentials not configured!');
      console.log('   Check .env.local file');
      return false;
    }

    // Configure transporter based on service type
    let transportConfig: any;

    if (EMAIL_CONFIG.SERVICE) {
      // Use email service (gmail, outlook, etc.)
      transportConfig = {
        service: EMAIL_CONFIG.SERVICE,
        auth: {
          user: EMAIL_CONFIG.USER,
          pass: EMAIL_CONFIG.PASS,
        },
      };
    } else if (EMAIL_CONFIG.HOST) {
      // Use custom SMTP settings (Hostinger, cPanel, etc.)
      transportConfig = {
        host: EMAIL_CONFIG.HOST,
        port: EMAIL_CONFIG.PORT,
        secure: EMAIL_CONFIG.SECURE,
        auth: {
          user: EMAIL_CONFIG.USER,
          pass: EMAIL_CONFIG.PASS,
        },
      };
    } else {
      console.error('❌ No email service or SMTP host configured');
      return false;
    }

    const transporter = nodemailer.default.createTransport(transportConfig);

    const info = await transporter.sendMail({
      from: `"Rauha Wellness" <${EMAIL_CONFIG.USER}>`,
      replyTo: EMAIL_CONFIG.USER, // Allow replies
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Rauha Wellness Notification System',
        'List-Unsubscribe': `<mailto:${EMAIL_CONFIG.USER}?subject=unsubscribe>`,
        'Precedence': 'bulk',
        'X-Auto-Response-Suppress': 'OOF, DR, RN, NRN, AutoReply',
        'Organization': 'Rauha Wellness',
      },
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
}

/**
 * Send quiz notification to admin
 */
export async function sendQuizNotification(quizData: any): Promise<boolean> {
  const template = emailTemplates.quizNotification(quizData);

  return sendEmail({
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

/**
 * Send waitlist notification to admin
 */
export async function sendWaitlistNotification(waitlistData: any): Promise<boolean> {
  const template = emailTemplates.waitlistNotification(waitlistData);

  return sendEmail({
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

/**
 * Send waitlist confirmation to customer
 */
export async function sendWaitlistConfirmation(waitlistData: any): Promise<boolean> {
  const template = emailTemplates.waitlistConfirmation(waitlistData);

  return sendEmail({
    to: waitlistData.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}

/**
 * Send quiz confirmation to customer
 */
export async function sendQuizConfirmation(quizData: any): Promise<boolean> {
  const template = emailTemplates.quizConfirmation(quizData);

  return sendEmail({
    to: quizData.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
}
