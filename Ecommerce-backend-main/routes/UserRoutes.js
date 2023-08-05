const express = require("express");
const user_router = express.Router();
const auth = require("../middlewares/auth");
const user = require("../controllers/Usercontroller");
const current_user = require("../controllers/currentUser");
const UserController = require('../controllers/UserProfile');
const upload  = require("../middlewares/multerConfig");

user_router.post("/register",user.register);

user_router.post("/login", user.login);

user_router.get('/current-user', auth.auth, current_user);

user_router.get('/users', auth.auth, user.getAllUsers);

user_router.delete('/users/:id', auth.auth, user.deleteUser);

user_router.post('/profile/upload', auth.auth, upload.single('profilePhoto'), UserController.uploadProfilePhoto);
user_router.put('/profile', auth.auth, UserController.updateProfile);

user_router.get('/profile', auth.auth, UserController.getUserProfile);

user_router.use(auth.auth);

module.exports = user_router;
