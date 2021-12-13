import React, { useState, useEffect, useContext, createContext } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ListProduct from './components/ListProduct';
import Testimonial from './components/Testimonial';
import axios from 'axios';

export const ProductsContext = createContext([{
  productList: [],
  product: {},
  styles: {},
  related: [],
  productId: '41032',
}, (obj) => obj]);

const App = () => {
  const [products, setProducts] = useContext(ProductsContext);
  const productId = products.productId;


  useEffect(() => {
    axios.get('/products')
      .then((resultProductList) => {
        axios.get(`/products/${productId}`)
          .then((resultProduct) => {
            axios.get(`/products/${productId}/styles`)
              .then((resultStyles) => {
                console.log(resultStyles)
                axios.get(`/products/${productId}/related`)
                  .then((resultRelated) => {
                    updateProduct(
                      resultProductList.data,
                      resultProduct.data,
                      resultStyles.data,
                      resultRelated.data
                    )
                  })
              })
          })
      })

      .catch(err => console.log(`Product ${productId} err`, err))
  }, [productId]);

  const updateProduct = (productList, product, styles, related) => {
    setProducts(Object.assign({}, {
      productList: productList,
      product: product,
      styles: styles,
      related: related
    }));

  }

  const updateProductId = (id) => {
    setCurrentInfo({
      productId: id
    })
  }

  return (
    <ProductsContext.Provider value={products}>
      <Header />
      <Banner />
      <ListProduct />
      <Testimonial />
    </ProductsContext.Provider>
  )
}

export default App;