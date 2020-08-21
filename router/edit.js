const models = require("../models");
const express = require("express");
const router = express.Router();
const moment = require("moment");
const mime = require("mime");
const path = require("path");
const crypto = require("crypto");
const { upsert } = require("../utils");
const { promises } = require("fs");

router.post("/mempelai", function (req, res) {
  const { pria, wanita, story } = req.body;

  upsert({ pria, wanita, story, id: 1 }, { id: 1 }, models.mempelai)
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/akad", function (req, res) {
  const { lokasi, tanggal, jam } = req.body;

  upsert(
    {
      lokasi,
      tanggal: moment(tanggal).format("YYYY-MM-DD"),
      jam: moment(jam).format("HH:mm"),
      id: 1,
    },
    { id: 1 },
    models.akad
  )
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/resepsi", function (req, res) {
  const { lokasi, tanggal, jam } = req.body;
  upsert(
    {
      lokasi,
      tanggal: moment(tanggal).format("YYYY-MM-DD"),
      jam: moment(jam).format("HH:mm"),
      id: 1,
    },
    { id: 1 },
    models.resepsi
  )
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/ucapan-selamat", function (req, res) {
  const { user, ucapan } = req.body;
  models.ucapan_selamat
    .create({
      user,
      ucapan,
    })
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/keluarga-pria", function (req, res) {
  const { ayah, ibu } = req.body;
  upsert(
    {
      ayah,
      ibu,
      id: 1,
    },
    { id: 1 },
    models.keluarga_pria
  )
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/keluarga-wanita", function (req, res) {
  const { ayah, ibu } = req.body;
  upsert(
    {
      ayah,
      ibu,
      id: 1,
    },
    { id: 1 },
    models.keluarga_wanita
  )
    .then((result) => res.json({ status: 200, message: "ok" }))
    .catch((err) => {
      res.json("error");
    });
});

router.post("/gallery", async (req, res) => {
  const { fieldname, originalname, encoding, mimetype, buffer } = req.files[0];

  const ext = mime.getExtension(mimetype);

  const hash = crypto
    .createHash("md5")
    .update(`${originalname}${moment().unix()}`)
    .digest("hex");

  const filenamehash = `${hash}.${ext}`;
  await promises.writeFile(
    path.join(__dirname, "../uploads/") + filenamehash,
    buffer,
    "binary"
  );

  await models.galery.create({
    url: filenamehash,
  });
  res.json({ status: 200, message: "ok" });
});

module.exports = router;
