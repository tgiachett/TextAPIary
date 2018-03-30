
const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/all", (req, res) => {
  models.User.findAll({
  	include: [ models.Entry ]
  }).then((dbUsers) => {
    res.json({dbUsers});
  });
});

module.exports = router;