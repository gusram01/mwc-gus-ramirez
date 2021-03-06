import { Model } from 'mongoose';
import { User } from '../../../domain/entities/UserEntity';
import { IResponse } from '../../../domain/IResponse';
import { RepositoryAdapter } from '../../../infraestructure/adapter/RepositoryAdapter';

export class UserMongoRepository extends RepositoryAdapter {
  constructor(private mongooseModel: Model<User>) {
    super();
  }

  async register(user: Partial<User>): Promise<IResponse<Partial<User>>> {
    const modelDoc = new this.mongooseModel(user);
    try {
      const documentOrError = await modelDoc.save();
      if (!!documentOrError) {
        return {
          success: true,
          data: documentOrError.toObject(),
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

  async login(user: Partial<User>): Promise<IResponse<Partial<User>>> {
    const search: any = {};
    if (user.email !== null && typeof user.email !== 'undefined') {
      search.email = user.email;
    }
    if (user.username !== null && typeof user.username !== 'undefined') {
      search.username = user.username;
    }

    try {
      const documentOrError = await this.mongooseModel.findOne(search);

      if (!!documentOrError) {
        return {
          success: true,
          data: documentOrError,
        };
      }

      throw new Error('Verify username or password');
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async getUserById(id: string): Promise<IResponse<User>> {
    try {
      const documentOrError = await this.mongooseModel.findById(id);

      if (!!documentOrError) {
        return {
          success: true,
          data: documentOrError.toObject(),
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
    const modelDoc = new this.mongooseModel(user);
    try {
      const documentOrError = await modelDoc.save();
      if (!!documentOrError) {
        return {
          success: true,
          data: documentOrError.toObject(),
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
  async updateById(id: string, user: Partial<User>): Promise<IResponse<any>> {
    try {
      const documentOrError = await this.mongooseModel.findByIdAndUpdate(
        id,
        user,
        { new: true },
      );

      if (!!documentOrError) {
        return {
          success: true,
          data: documentOrError.toObject(),
        };
      }

      throw new Error('Update Error');
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  async deleteById(id: string): Promise<any> {
    try {
      const documentOrError = await this.mongooseModel.findById(id);

      if (!documentOrError) {
        throw new Error('User not finded');
      }

      await documentOrError.delete();

      return {
        success: true,
        data: {
          message: `User with id: ${documentOrError._id} was erased`,
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
