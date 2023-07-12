import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Box,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { HorizontalRule } from "@mui/icons-material";
import CustomizedSwitches from "../CustomizedSwitches/CustomizedSwitches";
import Any from "../../assets/images/any.png";
import Home from "../../assets/images/home.png";
import Room from "../../assets/images/room.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const essentials = [
  "Wifi",
  "Kitchen",
  "Washer",
  "Dryer",
  "Air conditioning",
  "Heating",
  "Dedicated workspace",
  "TV",
  "Hair dryer",
  "Iron",
];

const features = [
  "Pool",
  "Hot tub",
  "Free parking",
  "EV charger",
  "Crib",
  "Gym",
  "BBQ grill ",
  "Breakfast",
  "Indoor fireplace",
  "Smoking allowed",
];

const location = ["Beachfront", "Waterfront"];

const safety = ["Smoke alarm", "Carbon monoxide alarm"];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ children }) {
  const [open, setOpen] = React.useState(false);
  const [isShowLess, setShowLess] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [alignment, setAlignment] = React.useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div>
      <Button style={{ color: "#303030" }} onClick={handleClickOpen}>
        {children}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullwidth={true}
        maxWidth={"md"}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          <span style={{ textAlign: "center" }}>Filters</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid md={6} item>
              <Typography margin="30px 0" fontSize={"20px"} fontWeight="600">
                Type of place
              </Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  sx={{ padding: "20px" }}
                  value={0}
                  aria-label="left aligned"
                >
                  <Box>
                    <Typography
                      fontWeight="500"
                      textTransform={"capitalize"}
                      fontSize={"15px"}
                    >
                      Any type
                    </Typography>
                    <Typography textTransform={"capitalize"} fontSize={"13px"}>
                      $123 avg
                    </Typography>
                  </Box>
                </ToggleButton>
                <ToggleButton
                  sx={{ padding: "20px" }}
                  value={1}
                  aria-label="centered"
                >
                  <Box>
                    <Typography
                      fontWeight="500"
                      textTransform={"capitalize"}
                      fontSize={"15px"}
                    >
                      Room
                    </Typography>
                    <Typography textTransform={"capitalize"} fontSize={"13px"}>
                      $123 avg
                    </Typography>
                  </Box>
                </ToggleButton>
                <ToggleButton
                  sx={{ padding: "20px" }}
                  value={2}
                  aria-label="right aligned"
                >
                  <Box>
                    <Typography
                      fontWeight="500"
                      textTransform={"capitalize"}
                      fontSize={"15px"}
                    >
                      Entire home
                    </Typography>
                    <Typography textTransform={"capitalize"} fontSize={"13px"}>
                      $123 avg
                    </Typography>
                  </Box>
                </ToggleButton>
              </ToggleButtonGroup>
              <Typography margin="30px 30px 30px 0" fontSize={"13px"}>
                Browse rooms, homes and more. Average nightly prices don't
                include fees or taxes.
              </Typography>
            </Grid>
            <Grid md={6} item>
              <Box
                sx={{
                  backgroundImage:
                    alignment === 0
                      ? `url(${Any})`
                      : alignment === 1
                      ? `url(${Room})`
                      : `url(${Home})`,
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
          </Grid>
          <hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
          <Box>
            <Typography margin="30px 0" fontSize={"20px"} fontWeight="600">
              Price range
            </Typography>
            <Stack width="80%" margin="30px auto" direction="row">
              <Grid container>
                <Grid md={5} item>
                  <Box>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-amount">
                        Minimum
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-amount"
                        sx={{ border: "1px solid #303030" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid md={2} item>
                  <Stack
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <HorizontalRule color="#dddddd" />
                  </Stack>
                </Grid>
                <Grid md={5} item>
                  <Box>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-amount">
                        Maximum
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-amount"
                        sx={{ border: "1px solid #303030" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>
          <hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
          <Box>
            <Typography margin="30px 0" fontSize={"20px"} fontWeight="600">
              Rooms and beds
            </Typography>
            <Typography margin="30px 0">Bedrooms</Typography>
            <Typography margin="30px 0">Beds</Typography>
            <Typography margin="30px 0">Bathrooms</Typography>
          </Box>

          <hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
          <Box>
            <Typography margin="30px 0" fontSize={"20px"} fontWeight="600">
              Amenities
            </Typography>
            <Typography margin="20px 0" fontSize={"18px"} fontWeight="500">
              Essentials
            </Typography>
            <Grid container>
              {essentials.map((e, i) => (
                <Grid item xs={6} key={i}>
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="top"
                        control={
                          <Checkbox
                            {...label}
                            sx={{
                              color: "#303030",
                              "&.Mui-checked": {
                                color: "#303030",
                              },
                              "& .MuiSvgIcon-root": { fontSize: 28 },
                            }}
                          />
                        }
                        label={e}
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
            {isShowLess && (
              <Typography
                margin="20px 0"
                fontSize={"18px"}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                fontWeight="500"
                onClick={(e) => setShowLess(false)}
              >
                Show more
              </Typography>
            )}
            {!isShowLess && (
              <Box>
                <Typography margin="20px 0" fontSize={"18px"} fontWeight="500">
                  Features
                </Typography>
                <Grid container>
                  {features.map((e, i) => (
                    <Grid item xs={6} key={i}>
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="top"
                            control={
                              <Checkbox
                                {...label}
                                sx={{
                                  color: "#303030",
                                  "&.Mui-checked": {
                                    color: "#303030",
                                  },
                                  "& .MuiSvgIcon-root": { fontSize: 28 },
                                }}
                              />
                            }
                            label={e}
                            labelPlacement="end"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>
                <Typography margin="20px 0" fontSize={"18px"} fontWeight="500">
                  Location
                </Typography>
                <Grid container>
                  {location.map((e, i) => (
                    <Grid item xs={6} key={i}>
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="top"
                            control={
                              <Checkbox
                                {...label}
                                sx={{
                                  color: "#303030",
                                  "&.Mui-checked": {
                                    color: "#303030",
                                  },
                                  "& .MuiSvgIcon-root": { fontSize: 28 },
                                }}
                              />
                            }
                            label={e}
                            labelPlacement="end"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>
                <Typography margin="20px 0" fontSize={"18px"} fontWeight="500">
                  Safety
                </Typography>
                <Grid container>
                  {safety.map((e, i) => (
                    <Grid item xs={6} key={i}>
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="top"
                            control={
                              <Checkbox
                                {...label}
                                sx={{
                                  color: "#303030",
                                  "&.Mui-checked": {
                                    color: "#303030",
                                  },
                                  "& .MuiSvgIcon-root": { fontSize: 28 },
                                }}
                              />
                            }
                            label={e}
                            labelPlacement="end"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
            {!isShowLess && (
              <Typography
                margin="20px 0"
                fontSize={"18px"}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                fontWeight="500"
                onClick={(e) => setShowLess(true)}
              >
                Show less
              </Typography>
            )}
          </Box>

          <hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
          <Box>
            <Typography margin="30px 0" fontSize={"20px"} fontWeight="600">
              Booking options
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography fontSize="14px">Instant Book</Typography>
                <Typography color="#9b9b9b" fontSize="14px">
                  Listings you can book without waiting for Host approval
                </Typography>
              </Box>
              <Box>
                <CustomizedSwitches />
              </Box>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography fontSize="14px">Self check-in</Typography>
                <Typography color="#9b9b9b" fontSize="14px">
                  Easy access to the property once you arrive
                </Typography>
              </Box>
              <Box>
                <CustomizedSwitches />
              </Box>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          {/* <Stack direction="row"> */}
          <Button
            sx={{
              color: "#303030",
              textDecoration: "underline",
              fontSize: "16px !important",
            }}
            onClick={handleClose}
          >
            Clear all
          </Button>
          <Button
            autoFocus
            variant="contained"
            sx={{
              background: "#303030",
              textTransform: "inherit",
              p: "10px 20px",
              m: 2,
              fontSize: "16px !important",
            }}
            onClick={handleClose}
          >
            Show places
          </Button>
          {/* </Stack> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
