import { Schema, model } from 'mongoose';
import { User } from '../../../domain/entities/UserEntity';

const UserSchema = new Schema<User>({
  id: String,
  name: String,
  email: String,
  username: String,
  isEmailVerified: Boolean,
  password: String,
  gitlabUserId: String,
  countryId: String,
});

export default model('User', UserSchema);
