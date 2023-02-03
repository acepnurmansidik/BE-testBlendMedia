const { StatusCodes } = require("http-status-codes");
const {
  getAllNilai,
  createNilai,
  updateNilai,
  deleteNilai,
} = require("../../../service/mongo/nilai");

const index = async (req, res, next) => {
  const result = await getAllNilai(req);

  res.status(StatusCodes.CREATED).json({ count: result.length, data: result });
};

const create = async (req, res, next) => {
  try {
    const result = await createNilai(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateNilai(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteNilai(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
