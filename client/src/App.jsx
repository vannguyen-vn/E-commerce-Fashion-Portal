import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import ListProduct from './pages/ListProduct';
import ProductDetail from './pages/ProductDetail';

import axios from 'axios';
import { ProductsProvider } from './components/ProductsContext'


const App = () => {

  return (
    <ProductsProvider >
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<ListProduct />} />
          <Route exact path='products/:product_id' element={<ProductDetail />} />
        </Routes>
      </HashRouter>
    </ProductsProvider>
  )
}

export default App;