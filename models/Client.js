const mongoose = require("mongoose")

const client = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    cpf: {
        type: Number,
        require: true,
    },
    cellphone: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    debt: {
        type: String,
        require: true,
    },
});