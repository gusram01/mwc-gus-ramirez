import { User } from '../../domain/entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { UserMongoRepository } from '../../application/mongo/repository/UserMongoRepository';
import { IResponse } from '../../domain/IResponse';

export class GetUserUseCase implements UseCase<string, IResponse<User>> {
  constructor(private userRepository: UserMongoRepository) {}

  async execute(request: string): Promise<IResponse<User>> {
    const user = await this.userRepository.getUserById(request);
    console.log(user);
    return user;
  }
}
