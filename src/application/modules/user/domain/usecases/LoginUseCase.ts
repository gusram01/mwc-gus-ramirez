import { IResponse } from '../IResponse';
import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';

export class LoginUserUseCase
  implements UseCase<Partial<User>, IResponse<Partial<User>>>
{
  constructor(private userRepository: RepositoryAdapter) {}

  execute(request: Partial<User>): Promise<IResponse<Partial<User>>> {
    return this.userRepository.login(request);
  }
}
