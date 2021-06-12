import mongoose from 'mongoose';

import UserModel from './models/UserModel';

const uri = process.env.MONGO_DB as string;

const mongooseInstance = async () => {
  try {
    return await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  } catch (error: any) {
    console.error(error.message);
    throw new Error('DB connection fail');
  }
};

mongooseInstance();
export { UserModel };
