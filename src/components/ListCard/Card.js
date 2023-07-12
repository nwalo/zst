import React from "react";
// import HouseImg from "../../assets/images/house.webp";
// import BedImg from "../../assets/images/bed.webp";
// import InsideImg from "../../assets/images/inside.webp";
// import KitchenImg from "../../assets/images/kitchen.webp";
// import NightImg from "../../assets/images/night.webp";
// import PoolImg from "../../assets/images/pool.webp";
// import Pool2Img from "../../assets/images/pool2.webp";
// import RoofImg from "../../assets/images/roof.webp";
// import TreeImg from "../../assets/images/tree.webp";
import "./Card.css";
import Like from "../Icons/Like";
import Unlike from "../Icons/Unlike";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";

const Card = ({ homes }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1343,
    //     settings: {
    //       slidesToShow: 8,
    //       slidesToScroll: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  const handleLike = ({ index, i }) => {
    console.log(index, i);
  };

  return (
    <div className="card">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
          <div key={i} style={{ position: "relative" }}>
            <div className="likeBtn" onClick={(index) => handleLike(index, i)}>
              {1 > 2 ? <Like /> : <Unlike />}
            </div>
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${homes.image})` }}
            >
              {/* <img src={e} alt="" /> {i} */}
            </div>
          </div>
        ))}
      </Slider>

      <div className="cardFooter">
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="15px" fontWeight="500">
            Ngaparou, Senegal
          </Typography>
          <Stack direction="row" alignItems="center">
            <IoIosStar
              size={`14px`}
              style={{ margin: "3px" }}
              //   fillOpacity={"100%"}
            />
            <Typography fontSize="15px">{homes.ratings + "9"}</Typography>
          </Stack>
        </Stack>
        <Typography fontSize="14px" color="#717171">
          2,403 kilometers away
        </Typography>
        <Typography fontSize="14px" color="#717171">
          Jul 4 – 11
        </Typography>
        <Typography fontSize="15px" fontWeight="500">
          ${homes.cost} night
        </Typography>
      </div>
    </div>
  );
};

export default Card;
