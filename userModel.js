const mongoose = require("mongoose");
//const validator = require("validator");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: [true, "Please provide your name !"],
  },
  Password: {
    type: String,
    required: [true, "Please provide the password !"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide the password !"],
    validate: {
      validator: function (el) {
        return el === this.Password;
      },
      message: "password are not the same !",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
