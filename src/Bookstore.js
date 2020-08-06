import React from "react";

import "./style/bookstore.css";
import MenuTab from "./components/bookstore/menuTab";
import Navbar from "./components/bookstore/navbar";
import Banner from "./components/bookstore/banner";

function Bookstore() {
  return (
    <>
      <Navbar />
      <Banner />
      <MenuTab />
    </>
  );
}

export default Bookstore;
