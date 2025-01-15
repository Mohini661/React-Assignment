import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
import ProductListContextProvider from "./store/ProductContext";

function App() {
  return (
    <>
      <ProductListContextProvider>
        <Header />
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </ProductListContextProvider>
    </>
  );
}

export default App;
