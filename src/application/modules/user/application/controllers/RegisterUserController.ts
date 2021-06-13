import { Types } from 'mongoose';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../../domain/entities/UserEntity';
import { encrypter } from '../../../../utils/encrypter';
import { validateEmail } from '../../../../utils/mailBoxLayer';
import { RegisterUserUseCase } from '../../domain/usecases/RegisterUseCase';

export class RegisterUserController {
  constructor(private useCase: RegisterUserUseCase) {}

  async execute(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array(),
      });
    }

    const { name, email, username, password, countryId } = req.body;

    if (!(await validateEmail(email))) {
      return res.status(400).json({
        success: false,
        error: { message: 'Please verify email: <example@email.com>' },
      });
    }

    const _id = new Types.ObjectId().toString();
    const hashedPassword = await encrypter(password);

    const newUser = new User(
      _id,
      name,
      email,
      username,
      false,
      hashedPassword,
      '',
      countryId,
    );

    const response = await this.useCase.execute(newUser);

    return res.status(201).json(response);
  }
}
