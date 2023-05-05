const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const chef = require("./data/chef.json");

app.use(cors());
app.get("/", (req, res) => {
	res.send("Khabar khabo");
});

app.get("/chefs", (req, res) => {
	res.send(chef);
});

app.listen(port, () => {
	console.log(`khabar is on port ${port}`);
});
