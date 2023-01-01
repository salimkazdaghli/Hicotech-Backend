const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
