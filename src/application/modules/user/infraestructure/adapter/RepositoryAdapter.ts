import { User } from '../../domain/entities/UserEntity';
import { IResponse } from '../../domain/IResponse';
import { IUserRepository } from '../../domain/IUserRepository';

export abstract class RepositoryAdapter implements IUserRepository {
  abstract create(user: User): Promise<any>;
  abstract getUserById(id: string): Promise<IResponse<User>>;
  abstract updateById(id: string, user: Partial<IResponse<User>>): Promise<any>;
  abstract deleteById(id: string): Promise<any>;
}
