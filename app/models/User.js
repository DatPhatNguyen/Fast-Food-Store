// const mongoose = require("mongoose");
const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;
// const validate = require('mongoose-validator');
const userSchema = new Schema(
  {
    id: { type: ObjectId },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 30,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = model("Food", userSchema);
