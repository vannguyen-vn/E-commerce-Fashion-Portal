const express = require('express');
const path = require('path');
const axios = require('axios');
const token = require('../client/config.js');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var AtelierAPI = (method, endpoint, params = null, data = null) => {
  return (axios({
    method: method,
    url: endpoint,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
    params: params,
    data: data,
    headers: { Authorization: token.TOKEN },
  }));
};

app.get('/products', (req, res) => {
  AtelierAPI('GET', '/products', { page: 1, count: 20 })
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});


app.get('/products/:id', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.id}`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.get('/products/:id/styles', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.id}/styles`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.get('/products/:id/related', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.id}/related`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});



app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
