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
			Check out 6 <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/chefs">chefs</a> API
			and 27 <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/recipes">recipes</a>!
		</p>
		<p>
			Also you can go to indivudual <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/chefs/rahima_begum_01">chef's recipes</a> with their ID
			and Spcific <a href="https://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/recipes">recipe</a> for more info like its ingredient and cooking method '!
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
