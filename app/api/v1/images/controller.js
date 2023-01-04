const { StatusCodes } = require("http-status-codes");
const { createImages } = require("../../../service/mongo/images");

const create = async (req, res, next) => {
  try {
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { create };
