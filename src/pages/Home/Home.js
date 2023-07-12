import React from "react";

import "./Home.css";
import Header from "../../components/Header/Header";
import ListCard from "../../components/ListCard/ListCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <ListCard />
      <Footer />
    </div>
  );
};

export default Home;
