import bcrypt from 'bcrypt';

export const decrypter = async (pass: string, hashPass: string) =>
  await bcrypt.compare(pass, hashPass);
