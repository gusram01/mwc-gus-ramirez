import { IResponse } from '../IResponse';
import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';

export class CreateUserUseCase
  implements UseCase<User, IResponse<Partial<User>>>
{
  constructor(private userRepository: RepositoryAdapter) {}

  execute(request: User): Promise<IResponse<Partial<User>>> {
    return this.userRepository.create(request);
  }
}
