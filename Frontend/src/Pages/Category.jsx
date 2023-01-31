import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";

const Wrapper = styled.div``;

const Heading = styled.h2`
  padding: 7px 100px;
  display: inline-block;
  border-bottom: 1px solid gray;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 10px;
  padding-top: 20px;

  @media screen and (max-width: 480px) {
    padding: 40px 5px;
  }

  
`;

const HeadingWrapper = styled.div`text-align:center;`

const Category = () => {
  return (
    <>
      <Navbar />

      <Wrapper>
        <HeadingWrapper>
          <Heading>Mobile</Heading>
        </HeadingWrapper>

        <CardWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardWrapper>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Category;
