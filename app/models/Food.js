// const mongoose = require("mongoose");
const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;
const foodSchema = new Schema(
  {
    id: { type: ObjectId },
    name: { type: String, required: [true, "Message"], trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Food", foodSchema);
