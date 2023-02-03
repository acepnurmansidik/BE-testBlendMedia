const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const mahasiswaSchema = Schema(
  {
    nama: {
      type: String,
    },
    alamat: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = model("Mahasiswa", mahasiswaSchema);
