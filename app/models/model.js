const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: { type: String, required: [true, "Message"], trim: true },
    description: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", ContactSchema);
