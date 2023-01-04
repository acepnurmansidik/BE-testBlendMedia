const { BadRequestError } = require("../../errors");
const Users = require("../../api/v1/users/model");
const { createJWT, createTokenUser } = require("../../utils");

const signUp = async (req) => {
  const { name, email, password, confirmPassword } = req.body;

  const checkUser = await Users.findOne({ email });

  if (checkUser) throw new BadRequestError("Email sudah terdaftar!");

  if (password !== confirmPassword)
    throw new BadRequestError("Password tidak cocokm harap periksa kembali!");

  const result = await Users.create({ name, email, password });

  return result;
};

const signIn = async (req) => {
  const { email, password } = req.body;

  // cek apakah field nya sudah terisi
  if (!email || !password)
    throw new BadRequestError("Please provide email and password!");

  // cari berdasarkan email
  const result = await Users.findOne({ email });

  // cek password
  const isPasswordMatch = await result.comparePassword(password);
  if (!isPasswordMatch)
    throw new BadRequestError("Password yang anda masukan salah!");

  // create token
  const token = await createJWT({ payload: createTokenUser(result) });

  return {
    name: result.name,
    role: result.role,
    email: result.email,
    token: token,
  };
};

module.exports = { signUp, signIn };
