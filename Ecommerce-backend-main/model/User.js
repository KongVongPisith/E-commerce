const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default:'user'
    },
    profilePhoto: {
        type: String,
    },
    phoneNumber: {
        type: String
    },
    description: {
        type: String
    },
})
module.exports = mongoose.model("User", UserSchema);