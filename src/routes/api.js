const { Router } = require('express');
const app = Router();
const Companies = require('../controllers/Companies.js')

//Declaras las peticiones configuradas
app.get('/companies', Companies.index);
app.get('/companies/:id', Companies.id);
app.post('/companies', Companies.create);

module.exports = app;