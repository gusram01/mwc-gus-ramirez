import mongoose from 'mongoose';

import UserModel from './models/UserModel';

const uri = process.env.MONGO_DB as string;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    'MondoDb ready';
  })
  .catch((error) => {
    console.error(error.message);
    throw new Error(error.message);
  });

export { UserModel };
