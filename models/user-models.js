const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },

    phone: {
        required: false,
        type: String,
    },

    bio: {
        required: false,
        type: Array,
    },
});

export const userModel = mongoose.modelNames().includes("users")
    ? mongoose.model("users")
    : mongoose.model("users", schema);
