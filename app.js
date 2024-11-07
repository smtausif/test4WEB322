//this is my part 2

const express = require('express');
const app = express();
const data = require('./data');

// Setting up the ejs as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// this is the default route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// this is for route to display users
app.get('/user', (req, res) => {
    res.render('user', { users: data.users });
});

// this is for route to display products
app.get('/products', (req, res) => {
    res.render('products', { products: data.products });
});

// this if for route to display products with PID > 3
app.get('/products/high-id', (req, res) => {
    const highIDProducts = data.products.filter(product => product.PID > 3);
    res.render('prodhighthan3', { products: highIDProducts });
});

// Export the app for serverless function use on Vercel
module.exports = app;
