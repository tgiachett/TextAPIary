
const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.post("/create", (req, res) => {
  models.User.create({
    username: req.body.username
  }).then(() => {
    res.redirect("/");
  });
});

router.get("/:user_id/destroy", (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(() => {
    res.redirect("/");
  });
});

router.post("/:user_id/entries/create", (req, res) => {
  models.Entry.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(() => {
    res.redirect("/");
  });
});

router.get("/:user_id/tasks/:task_id/destroy", (req, res) => {
  models.Entry.destroy({
    where: {
      id: req.params.entry_id
    }
  }).then(() => {
    res.redirect("/");
  });
});


module.exports = router;