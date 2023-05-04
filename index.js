const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
	res.send("Khabar khabo");
});

app.listen(port, () => {
	console.log(`khabar is on port ${port}`);
});
