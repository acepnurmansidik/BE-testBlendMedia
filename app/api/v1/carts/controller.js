const { StatusCodes } = require("http-status-codes");
const {
  createCart,
  deleteCart,
  getAllCart,
} = require("../../../service/mongo/carts");

const index = async (req, res, next) => {
  try {
    const result = await getAllCart(req);

    res
      .status(StatusCodes.CREATED)
      .json({ count: result.length, data: result });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createCart(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCart(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, destroy, index };
