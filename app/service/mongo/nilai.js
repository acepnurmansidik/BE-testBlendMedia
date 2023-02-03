const Nilai = require("../../api/v1/nilai/model");

const getAllNilai = async (req) => {
  const { idmhs } = req.params;
  let result = await Nilai.find({ id_mahasiswa: idmhs })
    .select("id_mahasiswa nilai")
    .populate("id_mahasiswa", "nama");

  let value = 0;
  for (let i = 0; i < result.length; i++) {
    value += result[i].nilai;
  }

  result = {
    id_mahasiswa: result[0].id_mahasiswa,
    nilai: value,
  };

  return result;
};

const createNilai = async (req) => {
  const { id_matkul, id_mahasiswa, nilai } = req.body;

  const result = await Nilai.create({ id_matkul, id_mahasiswa, nilai });

  return result;
};

const updateNilai = async (req) => {
  const { id } = req.params;
  const { id_matkul, id_mahasiswa, nilai } = req.body;

  const result = await Nilai.findOneAndUpdate(
    { _id: id },
    { id_matkul, id_mahasiswa, nilai },
    { new: true },
  );

  return result;
};

const deleteNilai = async (req) => {
  const { id } = req.params;

  const result = await Nilai.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No Nilai with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllNilai,
  createNilai,
  updateNilai,
  deleteNilai,
};
