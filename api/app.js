const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const port = process.env.API_PORT;

app.use(cors());
app.use(express.json());

const product = { name : "product1", description: 'This is a description'}

app.get('/test', function(req, res, next) {
  res.json({ title: 'Express' });
});

app.post('/product', function(req, res, next) {
  const product = req.body;
  db.query(`INSERT INTO example ("name", "description") values ($1, $2)`, [product.name, product.description])
  res.status(201).send(req.body);
});

app.get('/product', async function(req, res, next) {
  const result = await db.query(`SELECT * FROM example`)
  res.status(200).send(result.rows);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});