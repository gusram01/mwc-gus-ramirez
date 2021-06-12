import { GetUserController } from './GetUserController';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';
import { UserMongoRepository } from '../mongo/repository/UserMongoRepository';
import { UserModel } from '../mongo';
import { CreateUserUseCase } from '../../domain/usecases/CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const userRepository = new UserMongoRepository(UserModel);
const getUserMongoUseCase = new GetUserUseCase(userRepository);
const getUserMongoController = new GetUserController(getUserMongoUseCase);

const createUserMongoUseCase = new CreateUserUseCase(userRepository);
const createUserMongoController = new CreateUserController(
  createUserMongoUseCase,
);

export { getUserMongoController, createUserMongoController };
