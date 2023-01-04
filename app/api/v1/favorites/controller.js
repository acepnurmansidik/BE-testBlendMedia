const { StatusCodes } = require("http-status-codes");
const {
  createFavoriteProduct,
  deleteFavoriteProduct,
  detailFavoriteProduct,
} = require("../../../service/mongo/favorites");

const create = async (req, res, next) => {
  try {
    const result = await createFavoriteProduct(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const findDetail = async (req, res, next) => {
  try {
    const result = await detailFavoriteProduct(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, findDetail };
