const express = require('express')
const app = express()
const port = 3000
const operation = require('./utils/operations');
//const math=require('math')
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pares2', (req, res) => {
  const {numero} = req.body;
  res.send(operation.pares2(numero));
})

app.get('/cosenoPar', (req, res) => {
  const {numero} = req.body;  
  res.send(operation.coseno(numero));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})