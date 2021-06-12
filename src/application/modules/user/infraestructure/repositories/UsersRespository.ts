import { User } from '../../domain/UserEntity';

export interface IUserRepository {
  getUserById(id: string): Promise<User>;
  create(user: User): Promise<any>;
  updateById(id: string, user: Partial<User>): Promise<any>;
  deleteById(id: string): Promise<any>;
}

export class UserRepository implements IUserRepository {
  getUserById(id: string): Promise<any> {
    return Promise.resolve(`sended Id: ${id}`);
  }
  create(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateById(id: string, user: Partial<User>): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
