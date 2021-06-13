import { UserModel } from '../mongo';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';
import { UserMongoRepository } from '../mongo/repository/UserMongoRepository';
import { CreateUserUseCase } from '../../domain/usecases/CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { UpdateUserUseCase } from '../../domain/usecases/UpdateUserUseCase';
import { UpdateUserController } from './UpdateUserController';
import { DeleteUserUseCase } from '../../domain/usecases/DeleteUserUseCase';
import { DeleteUserController } from './DeleteUserController';
import { LoginUserUseCase } from '../../domain/usecases/LoginUseCase';
import { LoginUserController } from './LoginUserController';
import { RegisterUserUseCase } from '../../domain/usecases/RegisterUseCase';
import { RegisterUserController } from './RegisterUserController';

const userRepository = new UserMongoRepository(UserModel);

const getUserMongoUseCase = new GetUserUseCase(userRepository);
const getUserMongoController = new GetUserController(getUserMongoUseCase);

const createUserMongoUseCase = new CreateUserUseCase(userRepository);
const createUserMongoController = new CreateUserController(
  createUserMongoUseCase,
);

const updateUserMongoUseCase = new UpdateUserUseCase(userRepository);
const updateUserMongoController = new UpdateUserController(
  updateUserMongoUseCase,
);

const deleteUserMongoUseCase = new DeleteUserUseCase(userRepository);
const deleteUserMongoController = new DeleteUserController(
  deleteUserMongoUseCase,
);

const loginUserMongoUseCase = new LoginUserUseCase(userRepository);
const loginUserMongoController = new LoginUserController(loginUserMongoUseCase);

const registerUserMongoUseCase = new RegisterUserUseCase(userRepository);
const registerUserMongoController = new RegisterUserController(
  registerUserMongoUseCase,
);

export {
  getUserMongoController,
  createUserMongoController,
  updateUserMongoController,
  deleteUserMongoController,
  loginUserMongoController,
  registerUserMongoController,
};
