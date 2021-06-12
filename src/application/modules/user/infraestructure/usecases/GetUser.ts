import { UseCase } from '../../../../../domain/UseCase';
import { UserRepository } from '../repositories/UsersRespository';

export class GetUserUseCase implements UseCase<any, any> {
  constructor(private userRepository: UserRepository) {}

  async execute(request: any): Promise<any> {
    const user = await this.userRepository.getUserById(request);
    console.log(user);
    return user;
  }
}
