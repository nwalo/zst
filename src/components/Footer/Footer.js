import { Fab, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import "./Footer.css";
import { KeyboardArrowUp, Language } from "@mui/icons-material";
import { PiDot } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
const Footer = () => {
  const isLessThan1100 = useMediaQuery("(max-width:1100px)");

  return (
    <div className="footer">
      <Fab
        sx={{
          position: "absolute",
          bottom: "100px",
          color: "common.white",
          bgcolor: "#303030",
          "&:hover": {
            bgcolor: "#404040",
          },
          textTransform: "capitalize",
        }}
        variant="extended"
        onClick={() => window.location.assign("https://www.google.com/maps")}
      >
        Show map
        <FaMap style={{ marginLeft: "10px" }} fontSize="20px" />
      </Fab>
      <Stack
        className="foot"
        direction={isLessThan1100 ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <Stack
            className="ft-right"
            flexWrap="wrap"
            direction={"row"}
            alignItems="center"
          >
            <p>© 2023 Airbnb, Inc.</p> <PiDot margin="0" fontSize="16px" />
            <p> Terms</p> <PiDot margin="0" fontSize="16px" />
            <p> Sitemap</p> <PiDot margin="0" fontSize="16px" />
            <p> Privacy</p> <PiDot margin="0" fontSize="16px" />
            <p>
              Your Privacy Choices{" "}
              <span>
                <svg width="26" height="12" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="11"
                    rx="5.5"
                    fill="#fff"
                  ></rect>
                  <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                  <path
                    d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                    stroke="#06F"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                    stroke="#fff"
                    strokeLinecap="round"
                  ></path>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="11"
                    rx="5.5"
                    stroke="#06F"
                  ></rect>
                </svg>
              </span>
            </p>
            <PiDot margin="0" fontSize="16px" />
            <p> Destinations</p>
          </Stack>
        </Stack>
        <Stack fontWeight={600} direction={"row"}>
          <Stack direction={"row"} alignItems="center">
            <Language sx={{ fontSize: "20px" }} /> <p>English (US) </p>{" "}
            <p>$ USD</p>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <p style={{ margin: 0 }}>Support & resources</p> <KeyboardArrowUp />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
