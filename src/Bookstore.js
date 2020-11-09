import React from "react";

import "./style/bookstore.css";
import MenuTab from "./components/bookstore/menuTab";
import Navbar from "./components/bookstore/navbar";
import Banner from "./components/bookstore/banner";
import { Switch, Route } from "react-router-dom";
import MenuTabDetail from "./components/bookstore/menuTabDetail";

function Bookstore() {
  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <Switch>
          <Route exact path="/" component={MenuTab} />
          <Route exact path="/book/:slug" component={MenuTabDetail} />
        </Switch>
      </div>
      {/* <MenuTab /> */}
    </>
  );
}

export default Bookstore;
