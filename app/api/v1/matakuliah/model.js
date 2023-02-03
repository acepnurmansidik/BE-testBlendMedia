const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const matkulSchema = Schema(
  {
    nama_matkul: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = model("Matkul", matkulSchema);
