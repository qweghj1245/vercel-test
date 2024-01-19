const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/names", (req, res) => {
  res.status(200).send([
    {
      name: "John",
    },
    {
      name: "Eric",
    },
  ]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT);
