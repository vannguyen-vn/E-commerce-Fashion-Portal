const express = require('express');
const path = require('path');
const axios = require('axios');
const token = require('../config.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var AtelierAPI = (method, endpoint, params = null, data = null) => {
  return (axios({
    method: method,
    url: endpoint,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
    params: params,
    data: data,
    headers: { Authorization: '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' },
  }));
};

app.get('https://fashion-van.netlify.app/products', (req, res) => {
  AtelierAPI('GET', '/products', { page: 1, count: 20 })
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});


app.get('https://fashion-van.netlify.app/products/:product_id', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.product_id}`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.get('https://fashion-van.netlify.app/products/:product_id/styles', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.product_id}/styles`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.get('https://fashion-van.netlify.app/products/:product_id/related', (req, res) => {
  AtelierAPI('GET', `/products/${req.params.product_id}/related`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});


app.get('https://fashion-van.netlify.app/reviews/:product_id', (req, res) => {
  AtelierAPI('GET', `/reviews/?sort=newest&product_id=${req.params.product_id}&count=50`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.get('/reviews/meta/:product_id', (req, res) => {
  AtelierAPI('GET', `/reviews/meta/?sort=newest&product_id=${req.params.product_id
    } & count=100`)
    .then(response => res.send(response.data))
    .catch(err => console.log('server err', err));
});

app.post('https://fashion-van.netlify.app/reviews', (req, res) => {
  AtelierAPI('POST', '/reviews', null, req.body)
    .then(response => {
      console.log('successful review form post :) ');
      res.status(201);
      return res.send(response.data);
    })
    .catch(err => console.log('server err', err));
});


app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
