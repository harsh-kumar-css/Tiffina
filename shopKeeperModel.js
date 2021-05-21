const mongoose = require("mongoose");
//const validator = require("validator");

const shopKeeperSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: [true, "Please provide your name !"],
  },
  mobile: {
    type: String,
    required: [true, "Please give your mobile number !"],
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

const shopKeeper = mongoose.model("shopKeeper", shopKeeperSchema);

module.exports = shopKeeper;
