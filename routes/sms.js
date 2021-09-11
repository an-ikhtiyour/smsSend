const express = require("express");
const router = express.Router();
const smsStorage = require("../storage/mongo/sms");

router.post("/", async (req, res) => {
    try {
        const response = await smsStorage.create(req.body);
        return res.status(201).send({ id: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const response = await smsStorage.getAll();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const response = await smsStorage.update(req.params.id, req.body);
        return res.status(200).send({ id: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const response = await smsStorage.get(req.params.id);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const response = await smsStorage.delete(req.params.id);
        return res.status(200).send({ msg: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;