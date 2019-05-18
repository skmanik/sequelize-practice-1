const path = require("path");
const db = require("../models");

// routes
module.exports = (app) => {
	// html route
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// get route to see posts in db
	app.get("/api/comments/", (req, res) => {
		db.Comment.findAll({}).then((dbComment) => {
			res.json(dbComment);
		});
	});

	// post route to add post to db
	app.post("/api/comments", (req, res) => {
		console.log(req.body);
		db.Comment.create({
			// refer to model
			name: req.body.name,
			email: req.body.email,
			comment: req.body.comment
		}).then((dbComment) => {
			res.json(dbComment);
		});
	});
}