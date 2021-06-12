import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { IResponse } from '../IResponse';
import { IUserRepository } from '../IUserRepository';

export class GetUserUseCase implements UseCase<string, IResponse<User>> {
  constructor(private userRepository: IUserRepository) {}

  execute(request: string): Promise<IResponse<User>> {
    return this.userRepository.getUserById(request);
  }
}
