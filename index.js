const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");

app.use(cors());
app.get("/", (req, res) => {
	res.send(`
		<p>
			Check out 6 <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/chefs" target="_blank">chefs</a> API
			and 27 <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/recipes" target="_blank">recipes</a>!
		</p>
		<p>
			Also, you can go to individual <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/chefs/rahima_begum_01" target="_blank">chef's recipes</a> with their ID
			and specific <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/recipes/REC0001" target="_blank">recipe</a> for more information like its ingredients and cooking method!
		</p>
	`);
});

app.get("/chefs", (req, res) => {
	res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
	const id = req.params.id;
	const selectedNews = recipes.filter((r) => r.chef_id === id);
	res.send(selectedNews);
});

app.get("/recipes", (req, res) => {
	res.send(recipes);
});
app.get("/recipes/:id", (req, res) => {
	const id = req.params.id;
	const selectedNews = recipes.find((r) => r.id === id);
	res.send(selectedNews);
});

app.listen(port, () => {
	console.log(`khabar is on port ${port}`);
});
