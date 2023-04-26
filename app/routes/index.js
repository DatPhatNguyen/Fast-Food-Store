const userRouter = require("./User");
const siteRouter = require('./Site');
const foodRouter = require('./Food');
function router(app) {
    app.use('/users', userRouter);
    app.use('/foods', foodRouter);
    app.use("/", siteRouter);
}
// router.post("/register", UserController.registerHandle);
module.exports = router;

