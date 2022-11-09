import React from "react";
import BodyFeature from "../Components/BodyFeature";
import Header from "../Components/Header";
import HomeBodyCreateAccount from "../Components/HomeBodyCreateAccount";

import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBodyCreateAccount />

      <BodyFeature />

      
    </>
  );
};

export default Home;
