const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const data = require("./test-data");

app.engine(
 "handlebars",
 exphbs({
  partialsDir: path.join(__dirname, "views", "partials"),
 })
);
app.set("view engine", ".handlebars");

// Define routes
app.get("/", (_, res) => {
 res.render("index", { ...data });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
