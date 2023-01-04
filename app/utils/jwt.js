const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const createJWT = async (payload) => {
  const token = jwt.sign(payload, jwtSecret);

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

const createTokenUser = async (payload) => {
  return {
    _id: payload._id,
    name: payload.name,
    email: payload.email,
    role: payload.role,
  };
};

module.exports = { createJWT, createTokenUser, isTokenValid };
