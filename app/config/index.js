// const dbUrl = "mongodb://localhost:27017";
// const dbName = "fast_food_store";
const config = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    url: `mongodb://127.0.0.1:27017/food_db` || process.env.MONGODB_URI,
  },
};
// export default config;

module.exports = config;
