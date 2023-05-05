const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");

app.use(cors());
app.get("/", (req, res) => {
	res.send("Khabar khabo");
});

app.get("/chefs", (req, res) => {
	res.send(chefs);
});
app.get("/recipes", (req, res) => {
	res.send(recipes);
});

app.listen(port, () => {
	console.log(`khabar is on port ${port}`);
});
