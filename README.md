# 🛒 Assignment 2 – E-Commerce Product API

## 📌 Objective
Build a REST API using Express.js that manages product data using an in-memory JSON array.

This API allows you to:
- View products
- Add new products
- Update product details

No database is used.

---

## 🧾 Product Structure

Each product looks like this:

{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}

---

## 📦 Sample Data

const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];

---

## 🚀 Technologies Used
- Node.js
- Express.js
- CORS Middleware
- In-Memory JSON Array

---

## ▶️ How to Run Locally

1. Clone Repository
git clone <your-github-link>

2. Go to project folder
cd assignment2

3. Install dependencies
npm install

4. Run server
node index.js

Server runs on:
http://localhost:3000

---

## 📚 API Routes

### ✅ GET Routes

1. Get All Products  
GET /products  
Status: 200

2. Get Product by ID  
GET /products/:id  
Example: GET /products/3  
Status: 200 or 404

3. Get Products by Category  
GET /products/category/:categoryName  
Example: GET /products/category/Electronics  
Status: 200

---

### ✅ POST Route

4. Add New Product  
POST /products  

Body Example:
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}

Status: 201

---

### ✅ PUT Routes

5. Replace Entire Product  
PUT /products/:id  
Status: 200 or 404

6. Update Stock Only  
PUT /products/:id/stock  

Body:
{
  "stock": 60
}

Status: 200 or 404

7. Update Price Only  
PUT /products/:id/price  

Body:
{
  "price": 1299
}

Status: 200 or 404

---

## 📊 Status Codes Used
200 → Success  
201 → Created  
404 → Not Found  

---

## 🧪 Testing
Use Postman to test all routes.

---

## 📤 Submission Links


Postman Docs Link: https://documenter.getpostman.com/view/50839289/2sBXcGFg1z 
<br><br><br>
Render Deployment Link: https://node-js-assignment-2-1.onrender.com/products



