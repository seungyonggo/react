import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import "slick-carousel/slick/slick.css";

const Sample4 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    centerMode: true,
    pauseOnHover: true,
  };
  return (
    <S.Container>
      <Slider {...settings}>
        <S.Img src={img1} alt="Image 1" />
        <S.Img src={img2} alt="Image 2" />
        <S.Img src={img3} alt="Image 3" />
        <S.Img src={img4} alt="Image 4" />
        <S.Img src={img5} alt="Image 5" />
        <S.Img src={img6} alt="Image 6" />
      </Slider>
    </S.Container>
  );
};
export default Sample4;
const Img = styled.img`
  width: 650px;
  height: 420px;
  overflow: hidden;
  border: 1px solid black;
  margin: auto;
`;
const Container = styled.div`
  width: 650px;
  margin: auto;
  height: 422px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const S = {
  Img,
  Container,
};
