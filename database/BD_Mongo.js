const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose
        .connect(process.env.BD_URI)
        .then(console.log("Conectado ao Banco de Dados!"))
        .catch((err) => console.log(err));
};

module.exports = connectToDB;