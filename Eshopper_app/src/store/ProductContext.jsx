import { createContext, useReducer, useState } from "react";

export const ProductListContext = createContext();

const ProductReducer = (currentState, action) => {
  if (action.type === "INIT_PRODUCT") {
    return (currentState = action.payload.product);
  }
};

const ProductListContextProvider = ({ children }) => {
  const [productLists, productListDispatcher] = useReducer(ProductReducer, []);
  //get Products using useState
  //   const [products, setProducts] = useState([]);
  //   const getProducts = () => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((p) => setProducts(p.products));
  //   };

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((p) => setInitialProducts(p.products));
  };

  const setInitialProducts = (product) => {
    const initialProduct = {
      type: "INIT_PRODUCT",
      payload: { product },
    };
    productListDispatcher(initialProduct);
  };

  return (
    // <ProductListContext.Provider value={{ products, setProducts, getProducts}}>
    <ProductListContext.Provider value={{ productLists, getProducts }}>
      {children}
    </ProductListContext.Provider>
  );
};
export default ProductListContextProvider;
