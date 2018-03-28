const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/api/users/", function(req, res) {
  models.User.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

module.exports = router;