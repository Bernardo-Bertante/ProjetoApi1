require("dotenv").config();
const express = require('express');
const connectToDB = require("./database/BD_Mongo");

const app = express();
const port = process.env.PORT || 3000;

connectToDB();

app.get('/', function (rea, res) {
    res.send('Hello World')
}) 

app.listen(port, () => console.log(`Esse servidor esta rodando em http://localhost:${port}`));