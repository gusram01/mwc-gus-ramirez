import { Types } from 'mongoose';
import { Request, Response } from 'express';
import { User } from '../../domain/entities/UserEntity';
import { CreateUserUseCase } from '../../domain/usecases/CreateUserUseCase';
import { encrypter } from '../../../../utils/encrypter';

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async execute(req: Request, res: Response) {
    const { name, email, username, password, gitlabUserId, countryId } =
      req.body;

    const newUser = new User(
      new Types.ObjectId().toString(),
      name,
      email,
      username,
      false,
      await encrypter(password),
      gitlabUserId,
      countryId,
    );

    const response = await this.useCase.execute(newUser);

    return res.json(response);
  }
}
