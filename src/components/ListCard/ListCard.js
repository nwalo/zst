import React, { useState } from "react";
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
  const [array, setArray] = useState([
    {
      title: "Ngaparou, Senegal",
      image: HouseImg,
      id: 0,
      cost: "200",
      ratings: "4.6",
      liked: true,
    },
    {
      title: "5 bedroom Duplex in Ajah, Nigeria",
      image: BedImg,
      id: 1,
      cost: "300",
      ratings: "4.5",
      liked: false,
    },
    {
      title: "Nigga, Senegal",
      image: InsideImg,
      id: 2,
      cost: "350",
      ratings: "4.3",
      liked: false,
    },
    {
      title: "Ikeja, Nigeria",
      image: KitchenImg,
      id: 3,
      cost: "310",
      ratings: "4.4",
      liked: false,
    },
    {
      title: "Lagos, Nigeria",
      image: NightImg,
      id: 4,
      cost: "349",
      ratings: "4.9",
      liked: false,
    },
    {
      title: "Abuja, Nigeria",
      image: PoolImg,
      id: 5,
      cost: "90",
      ratings: "4.4",
      liked: false,
    },
    {
      title: "Ibadan, Nigeria",
      image: Pool2Img,
      id: 6,
      cost: "180",
      ratings: "4.8",
      liked: false,
    },
    {
      title: "Lekki, Nigeria",
      image: RoofImg,
      id: 7,
      cost: "240",
      ratings: "4.1",
      liked: false,
    },
    {
      title: "Victoria Island, Nigeria",
      image: TreeImg,
      id: 8,
      cost: "390",
      ratings: "4.7",
      liked: false,
    },
    {
      title: "Ngaparou, Senegal",
      image: HouseImg,
      id: 0,
      cost: "200",
      ratings: "4.6",
      liked: false,
    },
    {
      title: "5 bedroom Duplex in Ajah, Nigeria",
      image: BedImg,
      id: 1,
      cost: "300",
      ratings: "4.5",
      liked: false,
    },
    {
      title: "Nigga, Senegal",
      image: InsideImg,
      id: 2,
      cost: "350",
      ratings: "4.3",
      liked: false,
    },
    {
      title: "Ikeja, Nigeria",
      image: KitchenImg,
      id: 3,
      cost: "310",
      ratings: "4.4",
      liked: false,
    },
    {
      title: "Lagos, Nigeria",
      image: NightImg,
      id: 4,
      cost: "349",
      ratings: "4.9",
      liked: false,
    },
    {
      title: "Abuja, Nigeria",
      image: PoolImg,
      id: 5,
      cost: "90",
      ratings: "4.4",
      liked: false,
    },
    {
      title: "Ibadan, Nigeria",
      image: Pool2Img,
      id: 6,
      cost: "180",
      ratings: "4.8",
      liked: false,
    },
    {
      title: "Lekki, Nigeria",
      image: RoofImg,
      id: 7,
      cost: "240",
      ratings: "4.1",
      liked: false,
    },
    {
      title: "Victoria Island, Nigeria",
      image: TreeImg,
      id: 8,
      cost: "390",
      ratings: "4.7",
      liked: false,
    },
  ]);

  const handleLike = (data) => {
    let newarray = [...array];
    newarray[data].liked = !newarray[data].liked;
    setArray(newarray);
  };

  return (
    <div className="listcard" style={{ paddingTop: "250px" }}>
      <Box sx={{ width: "95%", margin: "0 auto" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {array.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card homes={e} key={i} handleLike={handleLike} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ListCard;
