const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Headers
app.use(helmet());

// Logging
app.use(morgan('dev'));

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  process.env.CLIENT_URL_2, // e.g. your Vercel deployment URL
  'http://localhost:3000',
  'https://glorax.in',
  'https://www.glorax.in'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Transporter verification/configuration
const isDummySMTP = !process.env.SMTP_HOST || 
                     process.env.SMTP_HOST.includes('smtp.gmail.com') && process.env.SMTP_PASS === 'placeholder_pass' ||
                     process.env.SMTP_PASS === 'your_email_password';

console.log(`📧 SMTP Config → Host: ${process.env.SMTP_HOST || 'NOT SET'}, Port: ${process.env.SMTP_PORT || 'NOT SET'}, User: ${process.env.SMTP_USER || 'NOT SET'}, Pass: ${process.env.SMTP_PASS ? '[SET]' : 'NOT SET'}, isDummySMTP: ${isDummySMTP}`);

let transporter;
let smtpStatus = { ready: false, error: null };

if (!isDummySMTP) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: parseInt(process.env.SMTP_PORT) === 465, // true for 465, false for others
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Verify transporter connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP VERIFY FAILED:', error.message, '| Code:', error.code);
      smtpStatus = { ready: false, error: error.message };
      transporter = null;
    } else {
      console.log('✅ Mail server is ready to take messages');
      smtpStatus = { ready: true, error: null };
    }
  });
} else {
  console.log('ℹ️ Running with placeholder SMTP configuration. Emails will be logged to the console instead of sent.');
  smtpStatus = { ready: false, error: 'Placeholder credentials detected' };
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// SMTP status check endpoint (for debugging)
app.get('/api/smtp-status', (req, res) => {
  res.status(200).json({
    smtpReady: smtpStatus.ready,
    smtpError: smtpStatus.error,
    smtpUser: process.env.SMTP_USER || 'NOT SET',
    smtpHost: process.env.SMTP_HOST || 'NOT SET',
    isDummyMode: isDummySMTP
  });
});

// Contact/Enquiry Form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, companyName, phone, email, product, message } = req.body;

  // Server-side validation
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!phone || phone.trim() === '') {
    return res.status(400).json({ error: 'Phone number is required' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }
  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Enquiry message is required' });
  }

  // Construct Email Content
  const mailSubject = `New Enquiry from ${name} — Glorax Website`;
  const mailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fcfcfc;">
      <div style="text-align: center; border-bottom: 2px solid #B87333; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #1C1C1C; margin: 0; font-size: 24px; letter-spacing: 1px;">GLORAX METAL RECYCLING</h2>
        <p style="color: #B87333; margin: 5px 0 0 0; font-size: 14px; font-weight: bold;">New Website Enquiry Received</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee; width: 35%; color: #555;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #1a1a1a;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee; color: #555;">Company:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #1a1a1a;">${companyName || 'Not Provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee; color: #555;">Phone:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #1a1a1a;">
            <a href="tel:${phone}" style="color: #B87333; text-decoration: none;">${phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee; color: #555;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #1a1a1a;">
            <a href="mailto:${email}" style="color: #B87333; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eeeeee; color: #555;">Product of Interest:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eeeeee; color: #1a1a1a; font-weight: bold;">${product || 'All Products'}</td>
        </tr>
      </table>

      <div style="background-color: #f5f3f0; padding: 15px; border-radius: 6px; border-left: 4px solid #B87333; margin-bottom: 20px;">
        <h4 style="margin: 0 0 10px 0; color: #1C1C1C; font-size: 15px;">Message/Enquiry:</h4>
        <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>

      <div style="border-top: 1px solid #eeeeee; padding-top: 15px; text-align: center; font-size: 12px; color: #777;">
        <p style="margin: 0 0 5px 0;">This email was automatically generated from the contact form on <a href="https://glorax.in" style="color: #B87333; text-decoration: none;">glorax.in</a>.</p>
        <p style="margin: 0; font-weight: bold;">GSTIN: 06AAJCV6761B1ZA | Sonipat, Haryana</p>
      </div>
    </div>
  `;

  try {
    if (transporter) {
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL || 'contact@glorax.in',
        replyTo: email,
        subject: mailSubject,
        html: mailHtml,
        text: `New Enquiry from ${name}\n\nCompany: ${companyName || 'N/A'}\nPhone: ${phone}\nEmail: ${email}\nProduct of Interest: ${product || 'All Products'}\n\nMessage:\n${message}`
      });
      console.log(`✉️ Email successfully sent for ${name} <${email}>`);
      return res.status(200).json({ success: true, message: "Thank you! We'll get back to you within 24 hours." });
    } else {
      // Mock sending in local dev/fallback mode
      console.log('==================================================');
      console.log('SIMULATED EMAIL DISPATCH (NO SMTP CREDENTIALS)');
      console.log(`Subject: ${mailSubject}`);
      console.log(`To: ${process.env.RECEIVER_EMAIL || 'contact@glorax.in'}`);
      console.log(`Reply-To: ${email}`);
      console.log(`Body (Text):`);
      console.log(`Name: ${name}\nCompany: ${companyName || 'N/A'}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${product}\nMessage: ${message}`);
      console.log('==================================================');
      return res.status(200).json({ 
        success: true, 
        message: "Thank you! [Dev Mode - Email Logged to Console] We'll get back to you within 24 hours." 
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to process enquiry. Please try again later or contact us directly at contact@glorax.in.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
