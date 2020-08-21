var models = require("../models");
var express = require("express");
var router = express.Router();

router.post("/gallery", function (req, res) {
  const { id } = req.body;
  models.galery.destroy({ where: { id } }).then(function () {
    res.json({ status: 200, message: "ok" });
  });
});

router.post("/ucapan-selamat", function (req, res) {
  const { id } = req.body;
  models.ucapan_selamat.destroy({ where: { id } }).then(function () {
    res.json({ status: 200, message: "ok" });
  });
});

module.exports = router;
