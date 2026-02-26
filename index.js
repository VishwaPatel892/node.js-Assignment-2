const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());

// In-memory data
let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 }
];

// GET all products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});



// GET product by ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(products[index]);
});



// GET products by category 
app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const filtered = products.filter( //matches the first one
    p => p.category === categoryName
  );
  res.status(200).json(filtered);
});


// POST new product
app.post("/products", (req, res) => {
  const name = req.body.name; //
  const category = req.body.category;
  const price = req.body.price;
  const stock = req.body.stock;
  const rating = req.body.rating;
  
  const newProduct = {
    id: products.length + 1,
    name: name,
    category: category,
    price: price,
    stock: stock,
    rating: rating
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});



// PUT replace product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);//find product index
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  
  products[index].name = req.body.name;//update the field
  products[index].category = req.body.category;
  products[index].price = req.body.price;
  products[index].stock = req.body.stock;
  products[index].rating = req.body.rating;
  res.status(200).json(products[index]);//sends
});


// PUT update stock
app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products[index].stock = req.body.stock;//change stock value
  res.status(200).json(products[index]);
});



// PUT update price
app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products[index].price = req.body.price;
  res.status(200).json(products[index]);
});



// DELETE product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(index, 1);// removes 1 item from array
  res.status(200).json({ message: "Product deleted successfully" });
});


// Start server

app.listen(5000, () => {
  console.log("Server running on port 5000");
});