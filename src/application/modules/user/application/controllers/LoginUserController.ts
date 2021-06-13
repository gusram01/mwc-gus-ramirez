import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { decrypter } from '../../../../utils/decrypter';
import { LoginUserUseCase } from '../../domain/usecases/LoginUseCase';

export class LoginUserController {
  constructor(private useCase: LoginUserUseCase) {}

  async execute(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array(),
      });
    }

    const { email, username, password } = req.body;

    const response = await this.useCase.execute({ email, username });

    if (response.data) {
      const passwordConfirmOrError = await decrypter(
        password,
        response.data.password!,
      );

      if (!passwordConfirmOrError) {
        return res.status(400).json({
          success: false,
          error: { message: 'Verify username or password' },
        });
      }
    }

    return res
      .status(201)
      .json({ ...response, data: { message: 'successful login' } });
  }
}
