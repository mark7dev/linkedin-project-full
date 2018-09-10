const { Router } = require('express');
const app = Router();
const Companies = require('../controllers/Companies.js')

app.get('/companies', Companies.index);
app.get('/companies/:id', Companies.id);

module.exports = app;