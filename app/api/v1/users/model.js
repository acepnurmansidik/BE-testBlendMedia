const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name can't be empty!"],
    },
    password: {
      type: String,
      required: [true, "Password can't be empty!"],
      ref: "User",
    },
    role: {
      type: String,
      required: [true, "Role can't be empty!"],
      enum: ["admin", "customer", "seller"],
      default: "customer",
    },
    email: {
      type: String,
      required: [true, "Email can't be empty!"],
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = model("User", userSchema);
