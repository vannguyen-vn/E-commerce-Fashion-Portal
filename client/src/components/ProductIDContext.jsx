import React, { createContext } from "react";


const ProductIDContext = React.createContext([
  {
    productList: [],
    product: {},
    styles: {},
    related: [],
    productId: '',
  },
  (obj) => obj
]);

export default ProductIDContext;