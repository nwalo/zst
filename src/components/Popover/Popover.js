import { Button, Typography, Popover } from "@mui/material";
import React from "react";

const Popup = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        {children}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        // sx={{ width: "400px" }}
      >
        <Typography sx={{ p: "10px 50px 10px 20px" }}>Sign up</Typography>
        <Typography sx={{ p: "10px 50px 10px 20px" }}>Login</Typography>
        <hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
        <Typography sx={{ p: "10px 50px 10px 20px" }}>
          Airbnb your home
        </Typography>
        <Typography sx={{ p: "10px 50px 10px 20px" }}>Help</Typography>
      </Popover>
    </div>
  );
};

export default Popup;
