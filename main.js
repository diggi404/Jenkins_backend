const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const path = __dirname + "/views/";
app.use(express.json());
app.use(express.static(path));
const port = process.env.PORT;

app.get("/", (req, res) =>
  res.send("Welcome to a backend system deployed with Jenkins")
);
app.get("/home", (req, res) => {
  res.sendFile(path + "index.html");
});
app.get("/sharks", (req, res) => {
  res.sendFile(path + "sharks.html");
});
app.listen(port, () => console.log(`Server listening on port ${port}`));
