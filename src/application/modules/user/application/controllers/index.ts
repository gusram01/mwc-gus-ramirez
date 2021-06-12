import { GetUserController } from './GetUserController';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';
import { UserMongoRepository } from '../../infraestructure/repositories/mongoRepository/UserMongoRepository';
import { UserModel } from '../mongo';

const userRepository = new UserMongoRepository(UserModel);
const getUserMongoUseCase = new GetUserUseCase(userRepository);
const getUserMongoController = new GetUserController(getUserMongoUseCase);

export { getUserMongoController };
