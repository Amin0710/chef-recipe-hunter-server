const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const chef = require("./data/chef.json");

app.get("/", (req, res) => {
	res.send("Khabar khabo");
});

app.get("/chefs", (req, res) => {
	res.send(chef);
});

app.listen(port, () => {
	console.log(`khabar is on port ${port}`);
});
