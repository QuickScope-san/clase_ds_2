const express = require('express')
const app = express()
const port = 3000
const operation = require('./utils/operations');
const taylorExp = require('./utils/taylorexp');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pares', (req, res) => {
  const {numero} = req.body;
  res.send(operation.pares(numero));
})

app.get('/taylorexp', (req, res) => {
  const grado =  req.body.grado;
  const valores = taylorExp.serie(grado).array;
  res.status(200);
  res.json( { array  : valores} );
});

app.get('*',(req,res)=>{
  res.status(404);
  res.json({ 'msg':'404 - not found'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
