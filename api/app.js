const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

const product = { name : "product1", description: 'This is a description'}

app.get('/test', function(req, res, next) {
  res.json({ title: 'Express' });
});

app.post('/product', function(req, res, next) {
  const product = req.body;
  console.log(req.body)
  db.query(`INSERT INTO example ("name", "description") values ($1, $2)`, [product.name, product.description])
  res.send(201);
});

app.get('/product', function(req, res, next) {
  res.json({ title: 'Express' });
});

app.listen(5001, () => {
  console.log(`Example app listening at http://localhost:${5001}`);
});