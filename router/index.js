var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/mempelai", function (req, res) {
  models.mempelai.findOne({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});
router.get("/akad", function (req, res) {
  models.akad.findOne({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});
router.get("/resepsi", function (req, res) {
  models.resepsi.findOne({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});
router.get("/ucapan-selamat", function (req, res) {
  models.ucapan_selamat.findAll({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});
router.get("/keluarga-pria", function (req, res) {
  models.keluarga_pria.findOne({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});
router.get("/keluarga-wanita", function (req, res) {
  models.keluarga_wanita.findOne({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});

router.get("/gallery", function (req, res) {
  models.galery.findAll({}).then(function (data) {
    if (data) res.json({ status: 200, data });
    else res.json({ status: 404, data: null });
  });
});

module.exports = router;
