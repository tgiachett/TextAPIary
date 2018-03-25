const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get("/", (req, res) => {
  models.User.findAll({
    include: [ models.Entry ]
  }).then((users) => {
    res.render("index", {
      title: "",
      users: users
    });
  });
});

module.exports = router;