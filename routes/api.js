
const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/all", (req, res) => {
  models.Entry.findAll({}).then((dbEntries) => {
    res.json(dbEntries);
  });
});

router.get("/from_:from", (req, res) => {
	models.Entry.findAll({
		where: {
			from: req.params.from
		}
	}).then((dbEntriesFrom) => {
		res.json(dbEntriesFrom);
	});
});

router.get("/entry_:id", (req, res) => {
	models.Entry.findOne({
		where: {
			id: req.params.id
		}
	}).then((dbEntry) => {
		res.json(dbEntry)
	});
});

router.put("/update", (req, res) => {
	console.log(req.body);
	models.Entry.update(req.body, {
		where: {
			id: req.body.id
		}
	}).then((dbEntry) => {
		res.json(dbEntry);
	});

});

router.delete("/entry_:id", (req, res) => {
	models.Entry.destroy({
		where: {
			id: req.params.id
		}
	}).then((dbEntry) => {
		res.json(dbEntry)
	});
});

module.exports = router;