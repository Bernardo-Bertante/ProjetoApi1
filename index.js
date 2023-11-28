require("dotenv").config();
const express = require('express');
const connectToDB = require("./database/BD_Mongo");

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const Client = require("./models/Client");
const clientRoutes = require("./routes/clientRoutes");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use("/create", clientRoutes);

connectToDB();

app.get("/", async (req, res) => {
    const clients = await Client.find();
    res.render("index", { clients });
});

app.get("/register", (req, res)=> {
    res.render("register");
}); 

app.listen(port, () => console.log(`Esse servidor esta rodando em http://localhost:${port}`));