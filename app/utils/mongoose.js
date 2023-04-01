const mongoose = require("mongoose");
const config = require("../config/index");
async function connect() {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(config.db.url, {
      useUnifiedTopology: true,
    });
    console.log("Connected to database", connect.connection.host, connect.connection.name);
  } catch (error) {
    console.log("Cannot connect to database", error);
  }
}
module.exports = { connect };
