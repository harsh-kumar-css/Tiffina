const mongoose = require("mongoose");
//const validator = require("validator");

const itemSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Please provide the product name !"],
  },
  Description: {
    type: String,
    required: [true, "Please give a short description about the product !"],
  },
  Price: {
    type: Number,
    required: [true, "Please provide the price of the product !"],
  },
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
