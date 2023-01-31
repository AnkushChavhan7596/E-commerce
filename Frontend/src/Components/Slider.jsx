import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { SliderItems } from "../data/SliderData/SliderItem";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #00000045;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  margin: 10px 0;
  padding: 10px 0;
  padding-top: 0;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 1100px) {
    flex : 2;
  }

  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-right: 40px;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const Image = styled.img`
  width: 82%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    width: 90%;
    height : 95%;
  }

  @media screen and (max-width: 650px) {
    width: 98%;
    height : 80%;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 70px;

  @media screen and (max-width: 850px) {
    font-size: 60px;
  }

  @media screen and (max-width: 700px) {
    font-size: 55px;
  }

  @media screen and (max-width: 650px) {
    font-size: 40px;
  }
`;

const Desc = styled.p`
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: 500;
  margin: 40px 0;
  line-height: 30px;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 650px) {
    margin: 20px 0;
    line-height: 25px;
  }
  
`;
const Button = styled.button`
  padding: 8px 30px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  background-color: #24c85d;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // slider arrow functionality
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
