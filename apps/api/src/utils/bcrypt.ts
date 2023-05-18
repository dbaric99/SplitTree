import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string, salt = null) {
  const SALT = salt || bcrypt.genSaltSync();
  return { hash: bcrypt.hashSync(rawPassword, SALT), salt: SALT };
}
