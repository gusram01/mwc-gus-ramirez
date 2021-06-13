import { Transporter, SendMailOptions } from 'nodemailer';

export class MailerService {
  constructor(private transporter: Transporter) {}

  async send(message: string, email: string): Promise<any> {
    const mailOption: SendMailOptions = {
      from: process.env.MAIL_USER as string,
      to: email,
      subject: 'Message from app',
      text: message,
    };
    return await this.transporter.sendMail(mailOption);
  }
}
