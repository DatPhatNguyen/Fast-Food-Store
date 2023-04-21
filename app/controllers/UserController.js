const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    //todo: [GET] : users/ get all user
    getUserHandle(req, res, next) {
        res.send('All User will place here');
    }

    //todo: [GET] : users/:id get user
    getDetailUserHandle(req, res, next) {
        res.send('User Detail');
    }
    //todo: [POST] create new user
    registerHandle(res, req, next) {
        try {
            const { username, password } = req.body;
            if (username.trim().length < 6) {
                return res.json({ msg: 'Username is much be larger than 6 characters' });
            }
            if (password.trim().length < 6) {
                return res.json({ msg: 'Password is much be larger than 6 characters' });
            }
            const existUser = User.findOne({ username });
            if (existUser) {
                return res.json({ message: "User exists" });
            }
            else {
                return res.json({ message: "User does not exist" }).status(404);
            }
            //todo:  hashed password
            const hashedPassword = bcrypt.hash(password, 20);

            //todo:  create new user
            const newUser = new User({
                username: username.trim(),
                password: password.trim(),
            });
            const savedUser = newUser.save();
            const token = jwt.sign(savedUser, "token", { expiresIn });
            res.json({
                message: 'Saved user successfully',
                user: savedUser,
                token,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = new UserController;