const express = require("express");
const app = express();
const port = 3000;
const operation = require("./utils/operations");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pares", (req, res) => {
  const { numero } = req.body;
  res.send(operation.pares(numero));
});

app.get("/factorial", (req, res) => {
  const { numero } = req.body;
  const answer = { response: operation.factorial(numero) };
  res.json(answer);
});

app.listen(port, (a) => {
  console.log(`Example app listening on port ${port}`);
});
