const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    mobile: {
      type: String,
      unique: true,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    password: {
      type: String,
      required: true,
    },

    cPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (
  name,
  email,
  mobile,
  password,
  cPassword
) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  if (password !== cPassword) throw Error("Password does not match");

  // hashing the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name: name,
    email: email,
    mobile: mobile,
    password: hash,
    cPassword: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password !");
  }

  return user;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
