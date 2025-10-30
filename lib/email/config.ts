// Email configuration
export const EMAIL_CONFIG = {
  // The email address where all notifications will be sent
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'anandjnu007@gmail.com',

  // Email service configuration (gmail, hostinger, or custom)
  SERVICE: process.env.EMAIL_SERVICE || '',

  // Custom SMTP settings (for Hostinger and other providers)
  HOST: process.env.EMAIL_HOST || '',
  PORT: parseInt(process.env.EMAIL_PORT || '465'),
  SECURE: process.env.EMAIL_SECURE === 'true',

  // Sender credentials
  USER: process.env.EMAIL_USER || '',
  PASS: process.env.EMAIL_PASS || '',
};

// Email templates
export const emailTemplates = {
  quizNotification: (data: any) => ({
    subject: `🎯 New Quiz Submission - ${data.recommendedProduct}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; padding: 10px; background: white; border-left: 4px solid #C98A53; }
          .label { font-weight: bold; color: #49392C; }
          .value { color: #666; margin-top: 5px; }
          .badge { display: inline-block; background: #C98A53; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🎯 New Quiz Submission</h1>
            <p style="margin: 10px 0 0 0;">Rauha Wellness Skin Quiz</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${data.email}</div>
            </div>

            <div class="field">
              <div class="label">🎨 Skin Type:</div>
              <div class="value">${data.skinType || 'Not specified'}</div>
            </div>

            <div class="field">
              <div class="label">😟 Skin Concerns:</div>
              <div class="value">${Array.isArray(data.skinConcerns) ? data.skinConcerns.join(', ') : 'None specified'}</div>
            </div>

            <div class="field">
              <div class="label">🎯 Skin Goals:</div>
              <div class="value">${Array.isArray(data.skinGoals) ? data.skinGoals.join(', ') : 'None specified'}</div>
            </div>

            <div class="field">
              <div class="label">👤 Age Range:</div>
              <div class="value">${data.ageRange || 'Not specified'}</div>
            </div>

            <div class="field" style="border-left-color: #C98A53; background: #FFF8F0;">
              <div class="label">✨ Recommended Product:</div>
              <div class="value">
                <span class="badge">${data.recommendedProduct}</span>
              </div>
            </div>

            <div class="field">
              <div class="label">📅 Submitted:</div>
              <div class="value">${new Date(data.timestamp).toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated notification from Rauha Wellness</p>
            <p>rauhawellness.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Quiz Submission - Rauha Wellness

Email: ${data.email}
Skin Type: ${data.skinType || 'Not specified'}
Skin Concerns: ${Array.isArray(data.skinConcerns) ? data.skinConcerns.join(', ') : 'None'}
Skin Goals: ${Array.isArray(data.skinGoals) ? data.skinGoals.join(', ') : 'None'}
Age Range: ${data.ageRange || 'Not specified'}

RECOMMENDED PRODUCT: ${data.recommendedProduct}

Submitted: ${new Date(data.timestamp).toLocaleString()}
    `.trim(),
  }),

  // Customer confirmation email for waitlist
  waitlistConfirmation: (data: any) => ({
    subject: `🎉 You're on the Rauha Wellness Waitlist!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .welcome { font-size: 18px; font-weight: bold; color: #49392C; margin-bottom: 20px; }
          .discount-box { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin: 20px 0; }
          .discount-code { font-size: 32px; font-weight: bold; letter-spacing: 3px; background: white; color: #C98A53; padding: 15px 30px; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .benefit { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #C98A53; }
          .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Rauha Wellness!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">You're on the exclusive waitlist</p>
          </div>
          <div class="content">
            <div class="welcome">
              Hi there! 👋
            </div>
            <p>Thank you for joining the Rauha Wellness waitlist for <strong>${data.selectedProduct}</strong>!</p>

            <div class="discount-box">
              <p style="margin: 0 0 10px 0; font-size: 18px;">🎁 Your Exclusive Early Bird Offer</p>
              <div class="discount-code">EARLY15</div>
              <p style="margin: 10px 0 0 0; font-size: 14px;">Save 15% on your first purchase!</p>
            </div>

            <p><strong>What's Next?</strong></p>

            <div class="benefit">
              <strong>📅 Launch Day:</strong> December 2025 - You'll be the first to know!
            </div>

            <div class="benefit">
              <strong>💎 Early Access:</strong> Get exclusive first access before everyone else
            </div>

            <div class="benefit">
              <strong>💰 Special Discount:</strong> Use code <strong>EARLY15</strong> for 15% OFF
            </div>

            <div class="benefit">
              <strong>📧 Updates:</strong> We'll send you launch reminders and exclusive content
            </div>

            <p style="margin-top: 30px;">We're working hard to bring you research-backed skincare that truly delivers results. Get ready for something special!</p>

            <p style="margin-top: 20px;"><strong>Stay beautiful,</strong><br>The Rauha Wellness Team</p>
          </div>
          <div class="footer">
            <p>This email was sent to ${data.email}</p>
            <p>Rauha Wellness | rauhawellness.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Welcome to Rauha Wellness!

Thank you for joining our waitlist for ${data.selectedProduct}!

YOUR EXCLUSIVE DISCOUNT CODE: EARLY15
Save 15% on your first purchase!

What's Next?
- Launch Day: December 2025
- Early Access: Be the first to shop
- Special Discount: 15% OFF with code EARLY15
- Updates: Exclusive launch reminders

We're excited to have you with us!

Stay beautiful,
The Rauha Wellness Team

rauhawellness.com
    `.trim(),
  }),

  // Customer confirmation email for quiz
  quizConfirmation: (data: any) => ({
    subject: `✨ Your Personalized Skincare Recommendation from Rauha`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .product-box { background: white; padding: 25px; border: 3px solid #C98A53; border-radius: 10px; margin: 20px 0; text-align: center; }
          .product-name { font-size: 24px; font-weight: bold; color: #C98A53; margin: 10px 0; }
          .discount-box { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 25px; border-radius: 10px; text-align: center; margin: 20px 0; }
          .discount-code { font-size: 28px; font-weight: bold; letter-spacing: 3px; background: white; color: #C98A53; padding: 12px 25px; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .benefit { background: white; padding: 12px; margin: 8px 0; border-left: 4px solid #C98A53; font-size: 14px; }
          .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Your Perfect Match!</h1>
            <p style="margin: 10px 0 0 0;">Personalized skincare recommendation</p>
          </div>
          <div class="content">
            <p>Hi! 👋</p>
            <p>Thank you for taking our Skin Quiz! Based on your answers, we've found the perfect product for you:</p>

            <div class="product-box">
              <p style="margin: 0; color: #666;">We Recommend</p>
              <div class="product-name">${data.recommendedProduct}</div>
              <p style="margin: 10px 0 0 0; color: #666;">Perfect for your skin type and concerns</p>
            </div>

            <div class="discount-box">
              <p style="margin: 0 0 10px 0; font-size: 18px;">🎁 Exclusive Offer Just For You!</p>
              <div class="discount-code">EARLY15</div>
              <p style="margin: 10px 0 0 0; font-size: 14px;">Save 15% on your first order!</p>
            </div>

            <p><strong>Why ${data.recommendedProduct}?</strong></p>

            <div class="benefit">
              ✓ Matches your skin type: <strong>${data.skinType || 'Your specific needs'}</strong>
            </div>

            <div class="benefit">
              ✓ Addresses your concerns: <strong>${Array.isArray(data.skinConcerns) ? data.skinConcerns.join(', ') : 'Your skincare goals'}</strong>
            </div>

            <div class="benefit">
              ✓ Research-backed ingredients for visible results
            </div>

            <div class="benefit">
              ✓ 10 years of skin science expertise
            </div>

            <p style="margin-top: 25px;"><strong>Coming December 2025</strong></p>
            <p>We're launching soon! Use code <strong>EARLY15</strong> to save 15% when we go live.</p>

            <p style="margin-top: 20px;"><strong>Stay radiant,</strong><br>The Rauha Wellness Team</p>
          </div>
          <div class="footer">
            <p>This email was sent to ${data.email}</p>
            <p>Rauha Wellness | rauhawellness.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Your Perfect Skincare Match!

Thank you for taking our Skin Quiz!

YOUR RECOMMENDATION: ${data.recommendedProduct}

Perfect for:
- Skin Type: ${data.skinType || 'Your needs'}
- Concerns: ${Array.isArray(data.skinConcerns) ? data.skinConcerns.join(', ') : 'Your goals'}

YOUR EXCLUSIVE DISCOUNT: EARLY15
Save 15% on your first order!

Coming December 2025
Use code EARLY15 when we launch!

Stay radiant,
The Rauha Wellness Team

rauhawellness.com
    `.trim(),
  }),

  waitlistNotification: (data: any) => ({
    subject: `🎉 New Waitlist Sign-up - ${data.selectedProduct}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C98A53 0%, #C8B0A9 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; padding: 15px; background: white; border-left: 4px solid #C98A53; }
          .label { font-weight: bold; color: #49392C; font-size: 14px; }
          .value { color: #666; margin-top: 5px; font-size: 16px; }
          .badge { display: inline-block; background: #C98A53; color: white; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold; text-transform: capitalize; }
          .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
          .highlight { background: #FFF8F0; border-left-color: #C98A53; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🎉 New Waitlist Sign-up</h1>
            <p style="margin: 10px 0 0 0;">Someone just joined your waitlist!</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📧 Email Address:</div>
              <div class="value">${data.email}</div>
            </div>

            <div class="field highlight">
              <div class="label">💎 Selected Product:</div>
              <div class="value">
                <span class="badge">${data.selectedProduct}</span>
              </div>
            </div>

            <div class="field">
              <div class="label">📅 Sign-up Date:</div>
              <div class="value">${new Date(data.timestamp).toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</div>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #E8F5E9; border-radius: 10px; text-align: center;">
              <p style="margin: 0; color: #2E7D32; font-weight: bold;">
                🎯 Remember: This customer gets 15% OFF on launch day!
              </p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated notification from Rauha Wellness</p>
            <p>rauhawellness.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Waitlist Sign-up - Rauha Wellness

Email: ${data.email}
Selected Product: ${data.selectedProduct}

Remember: This customer gets 15% OFF on launch day!

Submitted: ${new Date(data.timestamp).toLocaleString()}
    `.trim(),
  }),
};
