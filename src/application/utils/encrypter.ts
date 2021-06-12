import bcrypt from 'bcrypt';

export const encrypter = async (password: string) => {
  try {
    const saltRounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error(error);
    throw new Error('Encrypter fail');
  }
};
