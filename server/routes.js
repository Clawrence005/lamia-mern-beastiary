const express = require("express");
const beasts = require("./beasts.json");

module.exports = function beastRouter() {
  const router = express.Router();
  router.get('/beasts', (req, res) => {
    res.status(200).json({ beasts })
  });
  return router;
}