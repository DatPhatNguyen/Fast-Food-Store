const express = require("express");
const app = express();
const config = require("./app/config/");
const db = require("./app/utils/mongoose");
const port = config.app.port; //
const errorHandler = require("./app/middleware/errorHandler");

const route = require('./app/routes/');
app.use(errorHandler);
// connect to database
db.connect();

// route instance
route(app);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
