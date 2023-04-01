const dbUrl = "mongodb://localhost:27017";
const dbName = "contactbook";
const config = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    url: `${dbUrl}/${dbName}` || process.env.MONGODB_URI,
  },
};
module.exports = config;
