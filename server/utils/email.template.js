export const contactEmailTemplate = (name, email, message) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        .header h1 {
          color: #4a6bff;
          margin: 0;
          font-size: 24px;
        }
        .content {
          margin: 20px 0;
        }
        .details {
          background-color: #f5f7ff;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
        }
        .details p {
          margin: 5px 0;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #999;
          margin-top: 20px;
        }
        .highlight {
          font-weight: bold;
          color: #4a6bff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📬 New Message from Your Website</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>You've received a new contact form submission:</p>
          
          <div class="details">
            <p><span class="highlight">Name:</span> ${name}</p>
            <p><span class="highlight">Email:</span> ${email}</p>
            <p><span class="highlight">Message:</span></p>
            <p>${message}</p>
          </div>
          
          <p>Respond to this email to get in touch with ${name}.</p>
        </div>
        <div class="footer">
          <p>This email was sent from your website's contact form.</p>
          <p>© ${new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
