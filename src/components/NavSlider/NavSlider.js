import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import navTypes from "../../utilities/navTypes";

const NavSlider = () => {
  const [active, setActive] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 11,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1343,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 6,
      //     slidesToScroll: 4,
      //   },
      // },
    ],
  };

  return (
    <div className="navSlider">
      <Slider {...settings}>
        {navTypes.map((e, i) => (
          <div
            key={i}
            className={`navSliderContain ${active === i ? "active" : ""}`}
            onClick={(e) => setActive(i)}
          >
            <img
              src={e.img}
              alt={e.title}
              className={"navSliderImg"}
              style={{
                width: "25px",
                margin: "0 auto",
              }}
            />
            <Typography
              fontSize="13px"
              fontWeight={400}
              className="navSliderTitle"
              // borderBottom={
              //   e.title === "Amazing pools" ? "2px solid #303030" : ""
              // }
              width="fit-content"
              style={{
                textAlign: "left",
                padding: "10px 0",
              }}
            >
              {e.title}
            </Typography>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavSlider;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class NavSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 10,
//       slidesToScroll: 10,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
