import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { CustomNextArrow, CustomPrevArrow } from "./Custom";

// const { faker } = require("@faker-js/faker");
const { faker } = require("@faker-js/faker");
const Sample3 = () => {
  const imageUrls = [];
  for (let i = 0; i < 5; i++) {
    const imageUrl = faker.image.cats(650, 420, true);
    imageUrls.push(imageUrl);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <S.Img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Sample3;
const Img = styled.img`
  width: 530px;
  height: 420px;
  overflow: hidden;
  border: 1px solid black;
  margin: auto;
`;

const S = {
  Img,
};
