// const mongoose = require("mongoose");
const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Food = new Schema(
  {
    id: {
      type: ObjectId = require('mongodb').ObjectId,
    },
    name: { type: String, required: [true, "Message"], trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Food", Food);
