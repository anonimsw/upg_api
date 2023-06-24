const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {

        img1: {
            type: String,
            required: true,
            unique: true
        },
        img2: {
            type: String,
            required: true,
            unique: true
        },
        img3: {
            type: String,
            required: true,
            unique: true
        },
        img4: {
            type: String,
            required: true,
            unique: true
        },
        count: {
            type: Number,
            required: false,
            default: 1,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
        },

        brend_img: {
            type: String,
            required: true,
            trim: true,
        },
        brend: {
            type: String,
            required: true,
            trim: true,
        },
        promt: {
            type: String,
            required: true,
            trim: true,
        },
        price_promt: {
            type: Number,
        },
        no_promt: {
            type: Number,
        },
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);