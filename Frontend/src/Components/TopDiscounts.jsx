import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    margin: 20px 0;
  `;

  const CategoryHeading = styled.h2`
    color: #676666;
    padding: 10px 50px;
    padding-left: 75px;

    @media screen and (max-width: 1400px) {
      padding-left: 50px;
    }

    @media screen and (max-width: 1100px) {
      padding-left: 30px;
    }

    @media screen and (max-width: 500px) {
      padding-left: 15px;
      font-size: 18px;
    }
  `;

  const CategoriesWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;

  `;

  const Category = styled.div`
    width: 300px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.518);
    margin: 15px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
      width: 240px;
      margin: 12px;
    }

    @media screen and (max-width: 1100px) {
      width: 230px;
      margin: 12px;
    }

    @media screen and (max-width: 1000px) {
      width: 210px;
      margin: 10px;
    }

    @media screen and (max-width: 920px) {
      width: 190px;
      margin: 10px;
    }

    @media screen and (max-width: 840px) {
        width: 180px;
      margin: 7px;
    }

    @media screen and (max-width: 776px) {
        width: 280px;
      margin: 10px;
    }

    @media screen and (max-width: 550px) {
      width: 220px;
      margin: 8px;
    }

    @media screen and (max-width: 480px) {
      width: 200px;
      margin: 5px;
    }

    @media screen and (max-width: 420px) {
      width: 180px;
      margin: 4px;
    }

    @media screen and (max-width: 376px) {
      width: 160px;
      margin: 4px;
    }

    
  `;

  const Image = styled.img`
    width: 97%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (max-width: 1000px) {
      width: 98%;
    }

    @media screen and (max-width: 800px) {
      width: 99.9%;
    }
  `;

  const ViewAllWrapper = styled.div`
    text-align: right;
    padding: 10px 75px;
    padding-top: 20px;

    @media screen and (max-width: 1400px) {
      padding-right: 50px;
    }

    @media screen and (max-width: 1100px) {
      padding-right: 30px;
    }

    @media screen and (max-width: 900px) {
      padding-right: 15px;
    }
  `;

  const ViewAllLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 2px;
    padding: 10px 30px;
    background-color: #8080803c;
    color: #434343;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #8080807d;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
      color: white;
    }

    @media screen and (max-width: 900px) {
      padding: 8px 22px;
      font-size: 13px;
    }

    @media screen and (max-width: 700px) {
      padding: 7px 20px;
      font-size: 12px;
    }
  `;

  const BottomInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px 15px;
    padding-bottom: 20px;

    @media screen and (max-width: 1000px) {
      padding: 5px 10px;
      padding-bottom: 15px;
    }
  `;
  const Left = styled.div``;
  const Right = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #605f5f;
    padding: 5px 0;
    padding-bottom: 10px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
  `;

  const Discount = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: green;

    @media screen and (max-width: 800px) {
      font-size: 13px;
    }
  `;

  const SeeButton = styled.button`
    padding: 5px 23px;
    border-radius: 30px;
    font-size: 14px;
    outline: none;
    background-color: transparent;
    border: 2px solid #00a6ff;
    color: #000000be;
    letter-spacing: 1px;
    /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4); */
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      background-color: #00a6ff33;
    }

    @media screen and (max-width: 900px) {
      padding: 5px 15px;
    }

    @media screen and (max-width: 800px) {
      padding: 3px 13px;
      font-size: 12;
    }
  `;

  const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    height: 220px;

    @media screen and (max-width: 920px) {
        height: 200px;
    }

    @media screen and (max-width: 840px) {
        height: 180px;
    }

    @media screen and (max-width: 776px) {
        height: 230px;
    }

    @media screen and (max-width: 550px) {
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        height: 180px;
    }

    @media screen and (max-width: 420px) {
        height: 170px;
    }

    @media screen and (max-width: 376px) {
        height: 150px;
    }
  `;


const TopDiscounts = () => {
  
  return (
    <Wrapper>
      <CategoryHeading>Top Discounts</CategoryHeading>
      <CategoriesWrapper>
        <Category>
          <ImageWrapper>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRL14lfirq1obG-61dhgf17cg99gXJh7kW-NDB5ZIZsYgYcFvSvaF6BvEiATJwnrRfMp8&usqp=CAU" />
          </ImageWrapper>
          <BottomInfo>
            <Left>
              <Name>Mobiles</Name>
              <Discount>Min 70% off</Discount>
            </Left>
            <Right>
              <SeeButton>View</SeeButton>
            </Right>
          </BottomInfo>
        </Category>

        <Category>
          <ImageWrapper>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXK_BHi9m2VlraKSE2WDD_XMC8rj1KNbQA6AKnT2oUhV7NL6hQSMicDDZrwMtCK_vLMU&usqp=CAU" />
          </ImageWrapper>
          <BottomInfo>
            <Left>
              <Name>Laptops</Name>
              <Discount>Min 70% off</Discount>
            </Left>
            <Right>
              <SeeButton>View</SeeButton>
            </Right>
          </BottomInfo>
        </Category>

        <Category>
          <ImageWrapper>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JoimLpB5eZE9l7-WxfZz2MNi25Rsp1Y8-A&usqp=CAU" />
          </ImageWrapper>
          <BottomInfo>
            <Left>
              <Name>Watches</Name>
              <Discount>Min 70% off</Discount>
            </Left>
            <Right>
              <SeeButton>View</SeeButton>
            </Right>
          </BottomInfo>
        </Category>

        <Category>
          <ImageWrapper>
            <Image src="https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/2017/04/OnlineShopping-FeaturedImage-Spring2018.jpg" />
          </ImageWrapper>
          <BottomInfo>
            <Left>
              <Name>Cloths</Name>
              <Discount>Min 70% off</Discount>
            </Left>
            <Right>
              <SeeButton>View</SeeButton>
            </Right>
          </BottomInfo>
        </Category>

       
      </CategoriesWrapper>

      <ViewAllWrapper>
        <ViewAllLink to="/categories">View All</ViewAllLink>
      </ViewAllWrapper>
    </Wrapper>
  );
};

export default TopDiscounts;
