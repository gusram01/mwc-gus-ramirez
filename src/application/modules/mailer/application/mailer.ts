import nodeMailer from 'nodemailer';

export const transporter = nodeMailer.createTransport({
  host: process.env.MAIL_URL as string,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER as string,
    pass: process.env.MAIL_PASS as string,
  },
});

transporter.verify().then(() => console.log('Mailer ready'));
