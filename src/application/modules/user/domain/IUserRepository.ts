import { User } from '../domain/entities/UserEntity';
import { IResponse } from './IResponse';

export interface IUserRepository {
  create(user: User): Promise<any>;
  getUserById(id: string): Promise<IResponse<User>>;
  updateById(id: string, user: Partial<IResponse<User>>): Promise<any>;
  deleteById(id: string): Promise<any>;
}
