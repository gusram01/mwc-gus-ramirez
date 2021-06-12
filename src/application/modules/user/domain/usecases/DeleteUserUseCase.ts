import { UseCase } from '../../../../../domain/UseCase';
import { RepositoryAdapter } from '../../infraestructure/adapter/RepositoryAdapter';
import { IResponse } from '../IResponse';

export class DeleteUserUseCase implements UseCase<string, IResponse<any>> {
  constructor(private userRepository: RepositoryAdapter) {}

  execute(request: string): Promise<IResponse<any>> {
    return this.userRepository.deleteById(request);
  }
}
