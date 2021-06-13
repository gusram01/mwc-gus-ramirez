import { User } from '../domain/entities/UserEntity';
import { IResponse } from './IResponse';

export interface IUserRepository {
  create(user: User): Promise<IResponse<any>>;
  getUserById(id: string): Promise<IResponse<Partial<User>>>;
  updateById(id: string, user: Partial<User>): Promise<IResponse<any>>;
  deleteById(id: string): Promise<IResponse<any>>;
  register(user: Partial<User>): Promise<IResponse<Partial<User>>>;
  login(user: Partial<User>): Promise<IResponse<Partial<User>>>;
}
