// const validate = require('mongoose-validator');
const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const User = new Schema(
  {
    id: {
      type: ObjectId
    },
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
module.exports = model("User", User);
