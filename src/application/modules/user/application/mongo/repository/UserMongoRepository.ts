import { Document, Model } from 'mongoose';
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

      throw new Error('User not finded');
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  async create(user: User): Promise<IResponse<any>> {
    const modelOrError = new this.mongooseModel(user) as Document<User>;
    try {
      const saveOrError = await modelOrError.save();
      if (!!saveOrError) {
        return {
          success: true,
          data: saveOrError,
          error: null,
        };
      }
      throw new Error('Create error');
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  updateById(id: string, user: Partial<IResponse<User>>): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
