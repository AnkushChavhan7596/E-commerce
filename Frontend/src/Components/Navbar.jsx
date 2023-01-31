import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 20px;
  position: relative;

  @media screen and (max-width: 850px) {
    padding-right: 15px;
  }

  @media screen and (max-width: 550px) {
    padding: 10px 5px;
    padding-right: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const hambergurIcon = styled(MenuIcon)`
  font-size: 14px;
`;

const InputWrapper = styled.div`
  width: 250px;
  height: 35px;
  position: relative;

  @media screen and (max-width: 850px) {
    width: 200px;
  }

  @media screen and (max-width: 550px) {
    width: 170px;
    padding-right: 7px;
  }

  @media screen and (max-width: 450px) {
    width: 140px;
    padding-left: 0px;
  }

  @media screen and (max-width: 410px) {
    width: 120px;
    padding-left: 0px;
  }
`;

const MagnifyIcon = styled(SearchIcon)`
  font-size: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #646262;

  @media screen and (max-width: 450px) {
    font-size: 8px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #e1e3d883;
  padding: 5px 10px;
  outline: none;
  transition: 0.5s ease;

  &:focus {
    border: 2px solid #6bc6ffa0;
  }
`;

const LogoHeading = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #292929db;

  @media screen and (max-width: 850px) {
    font-size: 26px;
  }

  @media screen and (max-width: 550px) {
    font-size: 24px;
    font-weight: 800;
  }

  @media screen and (max-width: 550px) {
    font-size: 21px;
    font-weight: 800;
  }

  @media screen and (max-width: 450px) {
    font-size: 18px;
    font-weight: 800;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  color: #000000ab;
  margin-right: 20px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
    margin-right: 10px;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
    margin-right: 8px;
  }
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  width: 20vw;
  min-height: 100vh;
  z-index: 10;
  transition: 0.5s ease;
  background-color: lightblue;
  left: ${(props) => props.status === "close" && "-20vw"};
  left: ${(props) => props.status === "open" && "0"};
  background-color: white;
  border-right: 2px solid #94949473;

  @media screen and (max-width: 1100px) {
    width: 25vw;
    left: ${(props) => props.status === "close" && "-25vw"};
    left: ${(props) => props.status === "open" && "0"};
  }

  @media screen and (max-width: 950px) {
    width: 30vw;
    left: ${(props) => props.status === "close" && "-30vw"};
    left: ${(props) => props.status === "open" && "0"};
  }

  @media screen and (max-width: 800px) {
    width: 50vw;
    left: ${(props) => props.status === "close" && "-50vw"};
    left: ${(props) => props.status === "open" && "0"};
  }

  @media screen and (max-width: 700px) {
    width: 60vw;
    left: ${(props) => props.status === "close" && "-60vw"};
    left: ${(props) => props.status === "open" && "0"};
  }

  @media screen and (max-width: 600px) {
    width: 70vw;
    left: ${(props) => props.status === "close" && "-70vw"};
    left: ${(props) => props.status === "open" && "0"};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000024;
  z-index: 5;
  transition: 0.5s ease;
  display: ${(props) => props.overlayStatus === "none" && "none"};
  display: ${(props) => props.overlayStatus === "block" && "block"};
`;

// ######################################################################
const Navbar = () => {
  const [sidebar, setSidebar] = useState("close");
  const [overlayStyle, setOverlayStyle] = useState("none");

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle sidebar
  const handleSidebar = () => {
    if (sidebar === "close") {
      setSidebar("open");
      setOverlayStyle("block");
    } else {
      setSidebar("close");
      setOverlayStyle("none");
    }
  };

  const handleProfile = () => {
    navigate(`/profile/${user?._id}`, { replace: true });
  };

  const handleHeading = () => {
    navigate("/", { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());

    navigate("/", { replace: true });
  };

  const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
  `;
  const Image = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid gray;
  `;

  const Hello = styled.p`
    text-align: center;
    padding: 10px 5px;
    font-weight: 500px;
    font-size: 15px;
    color: gray;
  `;

  const SidebarBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  `;
  const SidebarButton = styled(Link)`
    display: block;
    width: 70%;
    border: none;
    outline: none;
    padding: 10px 20px;
    margin: 10px 5px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    background-color: #4ca4bca8;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    text-decoration: none;
  `;

  const LogoutButton = styled.button`
    display: block;
    width: 70%;
    font-weight: 600;
    border: none;
    outline: none;
    padding: 10px 20px;
    margin: 10px 5px;
    color: white;
    border-radius: 5px;
    background-color: #00bbff;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  `;

  return (
    <Container>
      <Left>
        {user && (
          <MenuIcon
            style={{
              marginRight: "10px",
              fontSize: "20px",
              zIndex: "11",
              cursor: "pointer",
            }}
            onClick={handleSidebar}
          />
        )}
        <InputWrapper>
          <Input placeholder="Search ..." />
          <MagnifyIcon />
        </InputWrapper>
      </Left>
      <Center>
        <LogoHeading style={{ cursor: "pointer" }} onClick={handleHeading}>
          ANKUSH.
        </LogoHeading>
      </Center>
      <Right>
        {!localStorage.getItem("user") && (
          <>
            <MenuLink to="login">Login</MenuLink>
            <MenuLink to="register">Register</MenuLink>
          </>
        )}
        {localStorage.getItem("user") && (
          <>
            <AccountCircleIcon
              style={{
                cursor: "pointer",
                fontSize: "30px",
                margin: "5px 10px",
              }}
              onClick={handleProfile}
            />

            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon
                color="action"
                style={{ cursor: "pointer" }}
              />
            </Badge>
          </>
        )}
      </Right>

      <SideBar status={sidebar}>
        <ImageWrapper>
          <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" />
        </ImageWrapper>
        <Hello>Hello, {user?.name}</Hello>

        <SidebarBottom>
          <SidebarButton to={`/profile/${user?._id}`}>Profile</SidebarButton>
          <SidebarButton to={`/categories`}>Categories</SidebarButton>
          <SidebarButton to={`/cart/${user?._id}`}>Cart</SidebarButton>
          <SidebarButton to={`/orders/${user?._id}`}>My Orders</SidebarButton>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </SidebarBottom>
      </SideBar>

      <Overlay overlayStatus={overlayStyle} onClick={handleSidebar}></Overlay>
    </Container>
  );
};

export default Navbar;
