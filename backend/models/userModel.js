const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter correct email"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minLength: [6, "Pasword should be atleast 6 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    resetPasswordToken: String,
    resetPasswordExpires: String
});

module.exports = mongoose.model("User", userSchema);