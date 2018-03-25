// dependencies 
const express = require("express"),
			bodyParser = require("body-parser");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

// load environmental variables
require("dotenv").config();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.static("public"));

// pass through routes
// require("./routes/html_routes.js")(app);
// require("./routes/api_routes.js")(app);

// sync models with sequelize and start express node server
db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log("Server listening on port " + PORT);
	});
});