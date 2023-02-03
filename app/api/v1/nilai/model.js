const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const nilaiSchema = Schema(
  {
    nilai: {
      type: Number,
    },
    id_mahasiswa: {
      type: mongoose.Types.ObjectId,
      ref: "Mahasiswa",
    },
    id_matkul: {
      type: mongoose.Types.ObjectId,
      ref: "Matkul",
    },
  },
  { timestamps: true },
);

module.exports = model("Nilai", nilaiSchema);
