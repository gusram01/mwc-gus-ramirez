import { Types } from 'mongoose';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../../domain/entities/UserEntity';
import { CreateUserUseCase } from '../../domain/usecases/CreateUserUseCase';
import { encrypter } from '../../../../utils/encrypter';

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async execute(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array(),
      });
    }
    const { name, email, username, password, gitlabUserId, countryId } =
      req.body;

    const _id = new Types.ObjectId().toString();
    const hashedPassword = await encrypter(password);

    const newUser = new User(
      _id,
      name,
      email,
      username,
      false,
      hashedPassword,
      !!gitlabUserId ? gitlabUserId : '',
      countryId,
    );

    const response = await this.useCase.execute(newUser);

    return res.status(201).json(response);
  }
}
