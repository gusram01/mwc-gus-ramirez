import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { IResponse } from '../IResponse';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';

export class GetUserUseCase
  implements UseCase<string, IResponse<Partial<User>>>
{
  constructor(private userRepository: RepositoryAdapter) {}

  execute(request: string): Promise<IResponse<Partial<User>>> {
    return this.userRepository.getUserById(request);
  }
}
