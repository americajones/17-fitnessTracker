const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
const PORT = process.env.PORT || 3030

const app = express();

// app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});