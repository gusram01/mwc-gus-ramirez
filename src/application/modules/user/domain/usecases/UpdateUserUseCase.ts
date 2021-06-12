import { User } from '../entities/UserEntity';
import { UseCase } from '../../../../../domain/UseCase';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';
import { IResponse } from '../IResponse';

export class UpdateUserUseCase
  implements UseCase<Partial<User>, IResponse<User>>
{
  constructor(private userRepository: RepositoryAdapter) {}

  execute(request: Partial<User>): Promise<IResponse<User>> {
    const { _id, ...partialUser } = request;
    return this.userRepository.updateById(_id!, partialUser);
  }
}
