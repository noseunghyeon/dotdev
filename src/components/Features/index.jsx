import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Test from "./Test";

const index = () => {
  return (
    <div className="Home">
      <div className="container">
        <Header />
        <Body />
        <Test />
        <Footer />
      </div>
    </div>
  );
};

export default index;
