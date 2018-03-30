
const models  = require("../models");
const express = require("express");
const router  = express.Router();

router.get("/all", (req, res) => {
  models.Entry.findAll({}).then((dbEntries) => {
    res.json({dbEntries});
  });
});

router.get("/from_:from", (req, res) => {
	models.Entry.findAll({
		where: {
			from: req.from
		}
	}).then((dbEntriesFrom) => {
		res.json({dbEntriesFrom});
	});
});

router.get("/entry_:id", (req, res) => {
	models.Entry.findOne({
		where: {
			id: req.id
		}
	}).then((dbEntry) => {
		res.json(dbEntry)
	});
});

// router.post("/new", (req, res) => {

// });

// router.put("/update", (req, res) => {

// });

// router.delete("/entry_:id", (req, res) => {

// });

module.exports = router;