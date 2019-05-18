const express = require("express");
const bodyParser = require("body-parser");

// set up express
const app = express();
const PORT = process.env.PORT || 8080;

// require models
const db = require("./models");

// express data parsing handle
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// static directory
app.use(express.static("public"));

// routes
require("./routes/routes.js")(app);

// sync sequelize models and start express
db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log("App listening on PORT " + PORT);
	});
});