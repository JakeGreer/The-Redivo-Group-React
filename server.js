// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================--------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const env = require('dotenv').load();
const cors = require('cors')
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express App
// =============================================================
app.use(cors()) // must be before BodyParser
app.use('/public', express.static('public')) // Static directory
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =============================================================
// const routes = require("./routes")
// app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
