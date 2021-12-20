// import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';

// export const ProductsContext = createContext();

// const ProductsProvider = props => {
//   const [product, setProduct] = useState({});
//   const [styles, setStyle] = useState({});
//   const [relatedProduct, setRelatedProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [productId, setProductId] = useState('41032');


//   useEffect(() => {
//     getProduct(productId);
//   }, [productId]);

//   const getProductList = () => {
//     axios.get('/products')
//       .then((resultProductList) => {
//         setProductList(resultProductList.data);
//       })
//       .catch(err => console.log(`Can't get product list`, err))
//   }

//   const getProduct = (productId) => {
//     axios.get(`/products/${productId}`)
//       .then((resultProduct) => {
//         axios.get(`/products/${productId}/styles`)
//           .then((resultStyles) => {
//             axios.get(`/products/${productId}/related`)
//               .then((resultRelated) => {
//                 setProduct(resultProduct.data);
//                 setStyle(resultStyles.data)
//                 setRelatedProduct(resultRelated.data);
//                 setLoading(true);
//               })
//           })
//       })
//       .catch(err => console.log(`Product ${productId} err`, err))
//   }


//   return (
//     <ProductsContext.Provider value={{ product, styles, relatedProduct, loading, setProductId }}>
//       {props.children}
//     </ProductsContext.Provider>
//   );

// }

// export default ProductsProvider;