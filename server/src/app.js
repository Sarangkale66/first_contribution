const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

// contribution from sarang branch
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/health", (req, res) => {
  res.json({
    message: "healthy",
    success: true
  });
});

// contribution from abdur branch
app.get("/about", (req, res) => {
  res.json({
    message: "about route added by abdur",
    success: true
  });
});

module.exports = app;