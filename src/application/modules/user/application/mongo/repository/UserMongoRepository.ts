import { Model } from 'mongoose';
import { User } from '../../../domain/entities/UserEntity';
import { IResponse } from '../../../domain/IResponse';
import { RepositoryAdapter } from '../../../infraestructure/adapter/RepositoryAdapter';

export class UserMongoRepository extends RepositoryAdapter {
  constructor(private mongooseModel: Model<User>) {
    super();
  }

  async getUserById(id: string): Promise<IResponse<User>> {
    try {
      const userOrError = await this.mongooseModel.findById(id);

      if (!!userOrError) {
        return {
          success: true,
          data: userOrError,
          error: null,
        };
      }

      throw new Error('Error getUserById');
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  create(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateById(id: string, user: Partial<IResponse<User>>): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
