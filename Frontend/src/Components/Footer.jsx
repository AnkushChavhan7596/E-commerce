import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  background-color: #323232;
  padding: 20px 200px;
  padding-bottom: 20px;
  color: white;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
  }
`;

const FooterBottom = styled.div`
  padding: 15px 0;
  padding-bottom: 5px;
`;

const FooterItem = styled.div``;

const FooterLink = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  margin: 2px;
  padding: 2px 10px;
  letter-spacing: .5px;
  border-radius: 2px;
  transition: all 0.4s ease;

  &:hover {
    background-color: #80808034;
  }
`;

const FooterLinkWrapper = styled.div``;

const FooterBottomText = styled.p`
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 600;
  border-top: 1px solid gray;
  padding-top: 10px;
  text-align: center;
`;

const FooterLogoWrapper = styled.div``;
const FooterLogo = styled(Link)`
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #d8fdff;
  margin: 20px 10px;
`;

const Footer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state)=>state.auth.user);
  return (
    <Wrapper>
      <FooterLogoWrapper>
        <FooterLogo to="/">ANKUSH.</FooterLogo>
      </FooterLogoWrapper>
      <FooterTop>
        <FooterLinkWrapper>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/categories">Categories</FooterLink>
          <FooterLink to={`/profile/${user?._id}`}>Profile</FooterLink>
          <FooterLink>Top Products</FooterLink>
          <FooterLink>Discounts</FooterLink>
        </FooterLinkWrapper>

        <FooterItem>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            vero, quia labore expedita esse alias accusantium maiores sed
            placeat consectetur cum aliquam voluptate reiciendis nisi fugiat
            tempora, numquam, quam illo!
          </p>
        </FooterItem>

        <FooterItem>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            vero, quia labore expedita esse alias accusantium maiores sed
            placeat consectetur cum aliquam voluptate reiciendis nisi fugiat
            tempora, numquam, quam illo!
            {/* <div>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>LikedIn</Link>
              <Link>Github</Link>
            </div> */}
          </p>
        </FooterItem>
      </FooterTop>

      <FooterBottom>
        <FooterBottomText>
          Copyright @2022. All rights are reserved.
        </FooterBottomText>
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
