import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 15px 10px;
  flex-wrap: wrap;
  padding-bottom: 10px;

  @media screen and (max-width: 1300px) {
    width: 280px;
    margin: 10px;
  }

  @media screen and (max-width: 1230px) {
    width: 270px;
    margin: 7px;
  }

  @media screen and (max-width: 1160px) {
    width: 250px;
    margin: 5px;
  }

  @media screen and (max-width: 1060px) {
    width: 235px;
    margin: 5px;
  }

  @media screen and (max-width: 1020px) {
    width: 280px;
    margin: 10px;
  }

  @media screen and (max-width: 625px) {
    width: 250px;
    margin: 7px;
  }
  @media screen and (max-width: 550px) {
    width: 220px;
    margin: 5px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    margin: 7px;
  }

  @media screen and (max-width: 450px) {
    width: 190px;
    margin: 5px;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 5px 10px;
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1160px) {
    height: 190px;
  }

  @media screen and (max-width: 550px) {
    height: 160px;
  }
`;
const Image = styled.img`
  height: 90%;
`;
const Name = styled.p`
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  color: gray;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }

`;
const Desc = styled.p`
  padding: 0px 10px;
  font-size: 15px;

  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;
const RatingsWrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const Price = styled.h3`
  font-weight: 700;
  font-size: 25px;
  color: #009602;

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;
const Button = styled.button`
font-size: 14px;
color: white;
border-radius: 4px;
background-color: #1289cedf;
border: none;
outline: none;
cursor: pointer;
padding: 7px 20px;

@media screen and (max-width: 550px) {
    padding: 5px 10px;
    font-size: 13px;
  }

`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ProductCard = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjivcct2hLpao-OTDoENHfh_Jbe8GaT2xGzw&usqp=CAU" />
      </ImageWrapper>

      <Name>Iphone 14 plus</Name>
      <Desc>
        Iphone 14 is one the best phone in the India, and in the smartphone
        world
      </Desc>
      <RatingsWrapper></RatingsWrapper>
      <BottomWrapper>
        <Left>
          <Price>300 Rs.</Price>
        </Left>
        <Right>
          <Button>Add to Cart</Button>
        </Right>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ProductCard;
