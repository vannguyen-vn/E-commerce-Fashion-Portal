import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListProduct />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Routes>

        <Testimonial />
      </BrowserRouter>
    </ProductsProvider>
  )
}

export default App;