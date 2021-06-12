import { Request, Response } from 'express';
import { UpdateUserUseCase } from '../../domain/usecases/UpdateUserUseCase';

export class UpdateUserController {
  constructor(private useCase: UpdateUserUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        throw new Error('Id is required');
      }
      const payload = req.body;

      if (Object.keys(payload).length === 0) {
        return res.status(200).json({
          success: true,
          data: { message: 'Nothing to update' },
        });
      }

      const response = await this.useCase.execute({
        ...payload,
        _id: req.params.id,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  }
}
