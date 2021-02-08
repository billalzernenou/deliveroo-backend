const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidable());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "hello" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.all("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
