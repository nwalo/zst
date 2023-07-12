import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import NavBar from "../../components/NavSlider/NavBar";

const Header = () => {
  return (
    <div
      className="Header"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        background: "#ffffff",
        boxShadow: "0px 1px 3px 0px #dddddd",
      }}
    >
      <Navigation />
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #dddddd",
        }}
      />
      <NavBar />
    </div>
  );
};

export default Header;
