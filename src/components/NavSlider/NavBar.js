import React from "react";
import NavSlider from "./NavSlider";
import { Grid, useMediaQuery } from "@mui/material";
import NavFilter from "./NavFilter";
import "./NavSlide.css";

const NavBar = () => {
  const isLessThan900 = useMediaQuery("(max-width:900px)");
  return (
    <div className="navbar">
      <Grid container spacing={0}>
        <Grid item xs={11} md={10} lg={10.5}>
          <NavSlider />
        </Grid>
        <Grid item sx={{ margin: "0 20px" }}></Grid>
        {isLessThan900 ? (
          ""
        ) : (
          <Grid item sm={2} md={1}>
            <NavFilter />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default NavBar;
