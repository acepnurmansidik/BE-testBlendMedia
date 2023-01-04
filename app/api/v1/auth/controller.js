const { StatusCodes } = require("http-status-codes");
const { signUp, signIn } = require("../../../service/mongo/auth");

const register = async (req, res, next) => {
  try {
    const result = await signUp(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await signIn(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
