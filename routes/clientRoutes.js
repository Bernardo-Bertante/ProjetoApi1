const router = require('express').Router();
const Client = require("../models/Client");

router.post("/", async (req, res) => {
    const client = req.body;
    if (!client.name) {
        return res.status(400).send('Preencha o nome.'); // Envie uma resposta de erro
    } else if (!client.cpf) {
        return res.status(400).send('Preencha o CPF.');
    } else if (!client.number) {
        return res.status(400).send('Preencha o Telefone.');
    } else if (!client.email) {
        return res.status(400).send('Preencha o Email.');
    } else if (!client.address) {
        return res.status(400).send('Preencha o Endereço.');
    } else {
        await Client.create(client);
        if(req.xhr) { // Se for uma requisição AJAX
            res.status(200).send('Cliente cadastrado com sucesso!'); // Envie uma resposta indicando sucesso
        } else {
            res.redirect("/"); // Redirecione para a página inicial apenas para outras requisições
        }
    }
});

module.exports = router;