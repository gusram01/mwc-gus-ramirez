import { IResponse } from '../IResponse';
import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';

export class CreateUserUseCase implements UseCase<User, IResponse<any>> {
  constructor(private userRepository: RepositoryAdapter) {}

  async execute(request: User): Promise<IResponse<any>> {
    const response = await this.userRepository.create(request);
    console.log(response);
    return response;
  }
}
