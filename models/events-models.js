const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    name: {
        required: true,
        type: String,
    },
    details: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },

    imageUrl: {
        required: true,
        type: String,
    },

    interested_ids: {
        required: false,
        type: Array,
    },

    going_ids: {
        required: false,
        type: Array,
    },

    swags: {
        required: false,
        type: Array,
    },
});

export const eventModel = mongoose.modelNames().includes("events")
    ? mongoose.model("events")
    : mongoose.model("events", schema);
