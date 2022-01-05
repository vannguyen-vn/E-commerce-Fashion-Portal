import React, { useState, useEffect, useContext, createContext } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

import Header from './components/Header';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import ListProduct from './pages/ListProduct';
import ProductDetail from './pages/ProductDetail';

import axios from 'axios';

import { ProductsProvider } from './components/ProductsContext'

const App = () => {

  return (
    <ProductsProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ListProduct />} />
          <Route exact path='products/:product_id' element={<ProductDetail />} />
        </Routes>
        <Testimonial />
      </HashRouter>
    </ProductsProvider>
  )
}

export default App;