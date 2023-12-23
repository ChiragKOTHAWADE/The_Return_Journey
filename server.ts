// src/server.ts

import express , { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;

// In-memory data store
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
];

app.use(bodyParser.json());


// GET /api/products
app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// POST /api/products
app.post('/api/products', (req: Request, res: Response) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updatedProduct = req.body;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  }
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
