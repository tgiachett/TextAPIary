
const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/all", (req, res) => {
  models.Entry.findAll({}).then((dbEntries) => {
    res.json({dbEntries});
  });
});

module.exports = router;