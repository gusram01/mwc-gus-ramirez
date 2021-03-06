import { Request, Response } from 'express';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';

export class GetUserController {
  constructor(private useCase: GetUserUseCase) {}

  async execute(req: Request, res: Response) {
    const response = await this.useCase.execute(req.params.id);

    return res.json(response);
  }
}
