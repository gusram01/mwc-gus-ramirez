import { Schema, model, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { User } from '../../../domain/entities/UserEntity';

const userSchema = new Schema<Document<User>>({
  id: { type: Schema.Types.ObjectId },
  name: String,
  email: { type: String, unique: true },
  username: String,
  isEmailVerified: Boolean,
  password: String,
  gitlabUserId: String,
  countryId: String,
});

userSchema.set('toObject', {
  transform: function (_: any, ret: any) {
    delete ret.password;
    delete ret.isEmailVerified;
    return ret;
  },
});

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
export default model('User', userSchema);
