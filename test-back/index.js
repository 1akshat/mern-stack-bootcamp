const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello World!" + req.params.id);
});

app.get("/login/:name", (req, res) => {
  return res.send("Login!" + req.params.name);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
