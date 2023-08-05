const express = require('express');
const admin_router = express.Router();
const auth = require("../middlewares/auth");

admin_router.get("/admin", auth.auth, auth.isAdmin);

module.exports = admin_router;