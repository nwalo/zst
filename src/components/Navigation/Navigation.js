import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Search, AccountCircle, Menu, Language } from "@mui/icons-material";
import "./Navigation.css";
import { Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Desktop = () => {
  const isLessThan1000 = useMediaQuery("(max-width:1000px)");
  return (
    <div className="Desktop">
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        style={{ padding: "20px 40px" }}
      >
        <Box>
          <Link to={"/"}>
            <img
              src={
                isLessThan1000
                  ? "https://ww1.freelogovectors.net/wp-content/uploads/2023/05/airbnb_logo-freelogovectors.net_.png"
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              }
              alt="logo"
              style={{ width: isLessThan1000 ? "50px" : "100px" }}
            />
          </Link>
        </Box>
        <Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            className="searchBorder searchBar"
            alignItems="center"
          >
            <Stack>
              <Typography fontSize="15px" fontWeight="500">
                Anywhere
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize="15px" fontWeight="500">
                Any week
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography
                fontSize="15px"
                color="#717171"
                mr="10px"
                fontWeight="300"
              >
                Add guest
              </Typography>
              <Search
                sx={{
                  background: "#ff385c",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "50%",
                  fontSize: "20px",
                }}
              />
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack>
              <Typography fontSize="15px" fontWeight="500">
                Airbnb your home
              </Typography>
            </Stack>
            <Stack>
              <Language sx={{ fontSize: "20px" }} />
            </Stack>
            <Stack className="menuBorder" alignItems="center" direction="row">
              <Menu
                sx={{
                  marginRight: "10px",
                }}
              />
              <AccountCircle
                sx={{
                  color: "#717171",
                  fontSize: "34px",
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="mobile">
      <Box margin="20px auto">
        <Stack
          direction="row"
          spacing={2}
          className="menuBorder searchBar"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Search
              sx={{
                padding: "5px",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            <Stack alignItems="flex-start" marginLeft="10px">
              <Typography fontSize="15px" fontWeight="500">
                Anywhere
              </Typography>
              <Typography
                fontSize="14px"
                color="#717171"
                mr="10px"
                fontWeight="300"
              >
                Any week . Add guest
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography
              fontSize="20px"
              sx={{
                padding: "5px 10px 0",
                borderRadius: "50%",
                border: "1px solid #dddddd",
                marginRight: "5px",
              }}
            >
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6.5 4a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zM18.5 6h-11M5.5 6h-3M6.5 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM18.5 16h-11M5.5 16h-3M14.5 9a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM13.5 11h-11M18.5 11h-3" />
                </g>
              </svg>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

const Navigation = () => {
  const isLessThan850 = useMediaQuery("(max-width:1000px)");
  return (
    <div className="Navigation">{isLessThan850 ? <Mobile /> : <Desktop />}</div>
  );
};

export default Navigation;
