const express = require("express");
const app = express();
const config = require("./app/config/");
const db = require("./app/utils/mongoose");
const port = config.app.port; //
const errorHandler = require("./app/middleware/errorHandler");
app.use(errorHandler);
// connect to database
db.connect();
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
