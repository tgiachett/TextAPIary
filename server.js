// dependencies 
const express = require("express"),
	bodyParser = require("body-parser"),
	exphbs = require("express-handlebars");

const db = require("./models"),
	routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// static directory
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/views')));
// const publicPath = path.join(__dirname, '../views');

// setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes);

// sync models with sequelize and start express node server
db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log("Server listening on port " + PORT);
	});
});