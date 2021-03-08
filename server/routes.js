const express = require("express");
const beasts = require("./beasts.json");

module.exports = function beastRouter() {
  const router = express.Router();

  router.get('/beasts', (req, res) => {
    res.status(200).json({ beasts })
  });

  router.get('/beasts/:beastId', (req, res) => {
    const { beastId } = req.params;
    const beast = beasts.find(beast => beast.id === beastId)
    res.status(200).json({ beast });
  })

  return router;
}