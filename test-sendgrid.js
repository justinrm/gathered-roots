const sgMail = require('@sendgrid/mail');
require('dotenv').config({ path: '.env.local' });

async function testSendGrid() {
  console.log('🧪 Testing SendGrid Configuration...\n');
  
  // Display configuration (hiding API key)
  console.log('Configuration:');
  console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '***HIDDEN***' : 'NOT SET');
  console.log('SENDGRID_FROM_EMAIL:', process.env.SENDGRID_FROM_EMAIL || 'NOT SET');
  console.log('CONTACT_FORM_RECIPIENT_EMAIL:', process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'NOT SET');
  console.log('EMAIL_FROM_NAME:', process.env.EMAIL_FROM_NAME || 'NOT SET');
  console.log('');

  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    console.error('❌ Missing required environment variables.');
    console.error('Please create .env.local with:');
    console.error('SENDGRID_API_KEY=SG.your-api-key-here');
    console.error('SENDGRID_FROM_EMAIL=hello@gatheredrootscleaning.com');
    return;
  }

  try {
    // Set API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('✅ SendGrid API key configured');

    // Send test email
    console.log('📤 Sending test email...');
    const msg = {
      to: process.env.SENDGRID_FROM_EMAIL, // Send to yourself
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: process.env.EMAIL_FROM_NAME || 'Gathered Roots Cleaning Test',
      },
      subject: 'Test Email from Gathered Roots Cleaning',
      html: `
        <h2>SendGrid Test Email Success!</h2>
        <p>This is a test email from your Gathered Roots Cleaning contact form using SendGrid.</p>
        <p>If you receive this, your SendGrid configuration is working correctly!</p>
        <p>✅ Ready for Vercel deployment!</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
    };

    const response = await sgMail.send(msg);
    console.log('✅ Test email sent successfully via SendGrid!');
    console.log('Status Code:', response[0].statusCode);
    console.log('📨 Check your inbox at:', process.env.SENDGRID_FROM_EMAIL);

  } catch (error) {
    console.error('❌ SendGrid Test Failed:');
    console.error('Error:', error.message);
    
    if (error.code) {
      console.error('Error Code:', error.code);
    }
    
    // Provide specific guidance based on error
    if (error.message.includes('Unauthorized')) {
      console.error('\n🔐 Authentication Failed:');
      console.error('1. Check your SendGrid API key is correct');
      console.error('2. Make sure API key has "Mail Send" permissions');
      console.error('3. Verify the API key starts with "SG."');
    } else if (error.message.includes('sender identity')) {
      console.error('\n📧 Sender Not Verified:');
      console.error('1. Go to SendGrid Settings → Sender Authentication');
      console.error('2. Verify your sender email:', process.env.SENDGRID_FROM_EMAIL);
      console.error('3. Check the verification email in your inbox');
    }
  }
}

testSendGrid().catch(console.error); 