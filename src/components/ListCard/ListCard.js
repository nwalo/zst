import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HouseImg from "../../assets/images/house.webp";
import BedImg from "../../assets/images/bed.webp";
import InsideImg from "../../assets/images/inside.webp";
import KitchenImg from "../../assets/images/kitchen.webp";
import NightImg from "../../assets/images/night.webp";
import PoolImg from "../../assets/images/pool.webp";
import Pool2Img from "../../assets/images/pool2.webp";
import RoofImg from "../../assets/images/roof.webp";
import TreeImg from "../../assets/images/tree.webp";

const ListCard = () => {
  const array = [
    {
      title: "Ngaparou, Senegal",
      image: HouseImg,
      date: "",
      cost: "200",
      ratings: "5",
    },
    {
      title: "5 bedroom Duplex in Ajah, Nigeria",
      image: BedImg,
      date: "",
      cost: "300",
      ratings: "4.5",
    },
    {
      title: "Nigga, Senegal",
      image: InsideImg,
      date: "",
      cost: "350",
      ratings: "4.3",
    },
    {
      title: "Ikeja, Nigeria",
      image: KitchenImg,
      date: "",
      cost: "310",
      ratings: "4.4",
    },
    {
      title: "Lagos, Nigeria",
      image: NightImg,
      date: "",
      cost: "349",
      ratings: "4.9",
    },
    {
      title: "Abuja, Nigeria",
      image: PoolImg,
      date: "",
      cost: "90",
      ratings: "4.4",
    },
    {
      title: "Ibadan, Nigeria",
      image: Pool2Img,
      date: "",
      cost: "180",
      ratings: "4.8",
    },
    {
      title: "Lekki, Nigeria",
      image: RoofImg,
      date: "",
      cost: "240",
      ratings: "4.1",
    },
    {
      title: "Victoria Island, Nigeria",
      image: TreeImg,
      date: "",
      cost: "390",
      ratings: "4.7",
    },
  ];
  return (
    <div className="listcard" style={{ paddingTop: "250px" }}>
      <Box sx={{ width: "95%", margin: "0 auto" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {array.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card homes={e} key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ListCard;
