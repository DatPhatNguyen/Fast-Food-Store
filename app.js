const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json);

//todo: [GET] /
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my page" });
});
module.exports = app;
