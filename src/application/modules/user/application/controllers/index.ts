import { GetUserController } from './GetUserController';
import { GetUserUseCase } from '../../infraestructure/usecases/GetUser';
import { UserRepository } from '../../infraestructure/repositories/UsersRespository';

const userRepository = new UserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

export { getUserController };
