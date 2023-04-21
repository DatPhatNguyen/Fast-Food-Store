const userRouter = require("./User");
const siteRouter = require('./Site');
function router(app) {
    app.use('/users', userRouter);
    app.use("/", siteRouter);
}
// router.post("/register", UserController.registerHandle);
module.exports = router;

