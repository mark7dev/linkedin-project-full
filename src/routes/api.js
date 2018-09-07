const { Router } = require('express');
const app = Router();
const Companies = require('../controllers/Companies.js')

app.get('/companies', Companies.index);

module.exports = app;