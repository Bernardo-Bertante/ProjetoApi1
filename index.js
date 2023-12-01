require("dotenv").config();
const express = require('express');
const connectToDB = require("./database/BD_Mongo");

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const Client = require("./models/Client");
let _client = null;
let clientDel = null;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.get("/", async (req, res) => {
    const clients = await Client.find();
    res.render("index", { clients });
});

app.get("/register", (req, res) => {
    res.render("register");
}); 

app.get("/visualiser/:id", async (req, res) => {
    const clientId = req.params.id;

    try {
        const client = await Client.findById(clientId);
        
        if (!client) {
            return res.status(404).send('Cliente não encontrado');
        }

        res.render("clientVisualiser", { client, _client: null });
    } catch (err) {
        res.status(500).send('Erro ao buscar o cliente');
    }
});

app.post("/create", async (req, res) => {
    const client = req.body;
    await Client.create(client);
    res.redirect("/") ;
});

app.get("/edit/:id", async (req, res) => {
    const clientId = req.params.id;

    try {
        _client = await Client.findById(clientId)
        const client = await Client.findById(clientId);
        res.render("clientVisualiser", { client, _client });
    } catch (err) {
        res.status(500).send('Erro ao buscar o cliente');
    }
});

app.post("/update/:id", async (req, res) => {
    const newClient = req.body;
    await Client.updateOne({ _id: req.params.id }, newClient);
    res.redirect("/visualiser/" + req.params.id);
});

app.get("/delete/:id", async (req, res) => {
    await Client.deleteOne({ _id: req.params.id });
    res.redirect("/");
});


app.listen(port, () => console.log(`Esse servidor esta rodando em http://localhost:${port}`));