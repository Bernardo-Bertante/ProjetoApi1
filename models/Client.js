const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    number: {
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

module.exports = mongoose.model("Client", clientSchema);