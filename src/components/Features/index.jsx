import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const index = () => {
  return (
    <div className="Home">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default index;
