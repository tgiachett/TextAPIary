const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/", (req, res) => {
  models.User.findAll({}).then((users) => {
    res.render("index", {
      title: "placeholder",
      users: users
    });
  });
});

router.post("/api/incoming", (req, res) => {
	console.log(req);
});

module.exports = router;