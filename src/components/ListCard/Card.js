import React from "react";
import "./Card.css";
import Like from "../Icons/Like";
import Unlike from "../Icons/Unlike";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";

const Card = ({ homes, handleLike }) => {
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

  return (
    <div className="card">
      <div className="likeBtn" onClick={(e) => handleLike(homes.id)}>
        {homes.liked ? <Like /> : <Unlike />}
      </div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
          <div key={i}>
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
          Hosted by Victor
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
