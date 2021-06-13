import { transporter } from './mailer';
import { MailerController } from './MailerController';
import { MailerService } from './MailerService';

const mailService = new MailerService(transporter);
const mailController = new MailerController(mailService);

export { mailController };
