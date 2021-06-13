import { User } from '../../domain/entities/UserEntity';
import { IResponse } from '../../domain/IResponse';
import { IUserRepository } from '../../domain/IUserRepository';

export abstract class RepositoryAdapter implements IUserRepository {
  abstract create(user: User): Promise<IResponse<any>>;
  abstract getUserById(id: string): Promise<IResponse<Partial<User>>>;
  abstract updateById(id: string, user: Partial<User>): Promise<IResponse<any>>;
  abstract deleteById(id: string): Promise<IResponse<any>>;
  abstract register(user: Partial<User>): Promise<IResponse<Partial<User>>>;
  abstract login(user: Partial<User>): Promise<IResponse<Partial<User>>>;
}
