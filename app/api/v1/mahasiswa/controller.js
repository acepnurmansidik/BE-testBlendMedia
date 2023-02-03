const { StatusCodes } = require("http-status-codes");
const {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = require("../../../service/mongo/mahasiswa");

const index = async (req, res, next) => {
  const result = await getAllMahasiswa();

  res.status(StatusCodes.CREATED).json({ count: result.length, data: result });
};

const create = async (req, res, next) => {
  try {
    const result = await createMahasiswa(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateMahasiswa(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteMahasiswa(req);

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
