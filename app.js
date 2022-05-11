const express = require('express')
const app = express()
const port = 3000
const operation = require('./utils/operations');
const seno = require('./utils/sinOperation');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/seno', (req, res) => {
  const {numero} = req.body;
  res.send(seno.senoParaImpares(numero));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})