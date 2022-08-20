import bcrypt from 'bcryptjs';


export const encrypt = async ( password: string ) => await bcrypt.hash( password, 10 )

export const compare = async ( plainPassword: string, hashedPassword: string ) => {
  return await bcrypt.compare( plainPassword, hashedPassword )
}
