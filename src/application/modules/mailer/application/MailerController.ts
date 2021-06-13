import { validateEmail } from '../../../utils/mailBoxLayer';
import { MailerService } from './MailerService';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export class MailerController {
  constructor(private mailerService: MailerService) {}

  async execute(request: Request, response: Response) {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({
        success: false,
        error: errors.array(),
      });
    }

    if (!(await validateEmail(request.body.email))) {
      return response.status(400).json({
        success: false,
        error: { message: 'Verify email <example@mail.com>' },
      });
    }
    const transportResponse = await this.mailerService.send(
      request.body.message,
      request.body.email,
    );
    return response.status(200).json({
      success: true,
      data: { messageID: transportResponse.messageId },
    });
  }
}
