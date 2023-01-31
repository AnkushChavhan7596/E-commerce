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
  `;

  const InfoWrapper = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000070;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease;
  `;

  const Category = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.518);
    margin: 15px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover ${InfoWrapper} {
      opacity: 1;
    }

    @media screen and (max-width: 1400px) {
      width: 240px;
      height: 200px;
      margin: 12px;
    }

    @media screen and (max-width: 1100px) {
      width: 230px;
      height: 190px;
      margin: 12px;
    }

    @media screen and (max-width: 1000px) {
      width: 210px;
      height: 170px;
      margin: 10px;
    }

    @media screen and (max-width: 800px) {
      width: 190px;
      height: 150px;
      margin: 8px;
    }

    @media screen and (max-width: 700px) {
      width: 170px;
      height: 120px;
    }

    @media screen and (max-width: 600px) {
      width: 150px;
      height: 100px;
      margin: 6px;
    }

    @media screen and (max-width: 500px) {
      width: 110px;
      height: 90px;
      margin: 4px;
    }

    @media screen and (max-width: 400px) {
      width: 90px;
      height: 80px;
      margin: 4px;
    }

    @media screen and (max-width: 350px) {
      width: 80px;
      height: 70px;
      margin: 4px;
    }
  `;

  const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #ebeaea;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 21px;
    }

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }

    @media screen and (max-width: 550px) {
      font-size: 15px;
    }

    @media screen and (max-width: 430px) {
      font-size: 13px;
    }
  `;

  const Button = styled.button`
    font-size: 16px;
    padding: 10px 20px;
    letter-spacing: 1px;
    font-weight: 600;
    background-color: #55c1ff94;
    color: white;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    outline: none;
    transition: 0.5s ease;

    &:hover {
      background-color: #55c1ffd5;
    }

    @media screen and (max-width: 900px) {
      font-size: 15px;
      padding: 7px 15px;
    }

    @media screen and (max-width: 700px) {
      padding: 5px 12px;
      font-size: 14px;
    }

    @media screen and (max-width: 550px) {
      padding: 4px 9px;
      font-size: 12px;
    }

    @media screen and (max-width: 430px) {
      padding: 3px 7px;
      font-size: 11px;
    }
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    transition: all .3s ease;

    &:hover{
        background-color: #8080807d;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
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


const TopCategories = () => {
  
  return (
    <Wrapper>
      <CategoryHeading>Top Categories</CategoryHeading>
      <CategoriesWrapper>
        <Category>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRL14lfirq1obG-61dhgf17cg99gXJh7kW-NDB5ZIZsYgYcFvSvaF6BvEiATJwnrRfMp8&usqp=CAU" />
          <InfoWrapper>
            <Title>Mobiles</Title>
            <Button>Explore</Button>
          </InfoWrapper>
        </Category>

        <Category>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXK_BHi9m2VlraKSE2WDD_XMC8rj1KNbQA6AKnT2oUhV7NL6hQSMicDDZrwMtCK_vLMU&usqp=CAU" />

          <InfoWrapper>
            <Title>Laptops</Title>
            <Button>Explore</Button>
          </InfoWrapper>
        </Category>

        <Category>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JoimLpB5eZE9l7-WxfZz2MNi25Rsp1Y8-A&usqp=CAU" />
          <InfoWrapper>
            <Title>Watches</Title>
            <Button>Explore</Button>
          </InfoWrapper>
        </Category>

        <Category>
          <Image src="https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/2017/04/OnlineShopping-FeaturedImage-Spring2018.jpg" />
          <InfoWrapper>
            <Title>Cloths</Title>
            <Button>Explore</Button>
          </InfoWrapper>
        </Category>

        <Category>
          <Image src="https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?b=1&s=170667a&w=0&k=20&c=HDFmFrDingaOzKhE_0pB65BBB76wuloDwA9_92pY9MA=" />
          <InfoWrapper>
            <Title>Home Appliances</Title>
            <Button>Explore</Button>
          </InfoWrapper>
        </Category>
      </CategoriesWrapper>

      <ViewAllWrapper>
        <ViewAllLink to="/categories">View All</ViewAllLink>
      </ViewAllWrapper>
    </Wrapper>
  );
};

export default TopCategories;
