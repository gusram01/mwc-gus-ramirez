import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../domain/usecases/DeleteUserUseCase';

export class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  async execute(req: Request, res: Response) {
    const response = await this.useCase.execute(req.params.id);

    return res.json(response);
  }
}
