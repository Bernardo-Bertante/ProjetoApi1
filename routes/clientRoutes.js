const router = require("express").Router();
const Client = require("../models/Client");

router.post("/", async (req, res) => {
    const client = req.body;
    await Client.create(client);
    res.redirect("/") ;
});

module.exports = router;