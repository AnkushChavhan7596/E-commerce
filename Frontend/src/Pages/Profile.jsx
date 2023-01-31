import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const Left = styled.div`
  border: 1px solid #0000001c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    padding: 15px;
  }

  @media screen and (max-width: 620px) {
    margin: 0 50px;
  }

  @media screen and (max-width: 470px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 400px) {
    margin: 0 5px;
  }
`;
const Right = styled.div`
  border: 1px solid #0000001c;
  padding: 20px 50px;
  padding-right: 120px;

  @media screen and (max-width: 880px) {
    padding: 20px 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 10px 10px;
  }

  @media screen and (max-width: 620px) {
    margin: 0 50px;
  }

  @media screen and (max-width: 470px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 400px) {
    margin: 0 5px;
  }
`;
const Text = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #808080c4;
  letter-spacing: 1px;
  margin: 20px 0;

  @media screen and (max-width: 620px) {
    font-weight: 500;
    font-size: 16px;
  }
`;
const Top = styled.div``;
const Bottom = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 620px) {
   margin-top: 5px;
  }
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 880px) {
    width: 180px;
    height: 180px;
  }

  @media screen and (max-width: 620px) {
    width: 170px;
    height: 170px;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 400px) {
    width: 130px;
    height: 130px;
  }
`;
const Button = styled.button`
  display: block;
  margin: 15px 0;
  width: 220px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #8080803a;
  color: #363636;
  font-weight: 600;
  letter-spacing: 0.7px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.5s ease;

  &:hover {
    background-color: #808080a0;
    transform: scale(1.07);
  }
`;
const ChangeProfileWrapper = styled.div``;
const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 0 40px;

  @media screen and (max-width: 880px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 620px) {
    padding: 0 10px;
  }
`;
const Input = styled.input`
  margin: 15px;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogoutButton = styled.button`
  padding: 5px 20px;
  font-weight: 500;
  color: white;
  background-color: #0000ff52;
  border: none;
  outline: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  margin-left: 70px;
`;

const Label = styled.label`
font-size: 14px;
  display: inline-block;
  background-color: #3a8ada80;
  color: white;
  padding: 7px 20px;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
  
`


const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("user");
    dispatch(logout());
  
    navigate("/", { replace: true });
  }

  return (
    <>
      <Navbar />

      <Wrapper>
        <Left>
          <ImageWrapper>
            <Image src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" />
          </ImageWrapper>
          <ChangeProfileWrapper>
            <Form>
              {/* <Input type="file" /> */}
              <input type="file" id="upload" hidden/>
              <Label for="upload">Change Profile</Label>
            </Form>
          </ChangeProfileWrapper>
        </Left>
        <Right>
          <Top>
            <LogoutWrapper>
              <LogoutButton style={{"cursor":"pointer"}} onClick={handleLogout}>Logout</LogoutButton>
            </LogoutWrapper>
            <Text>Name : {user?.name}</Text>
            <Text>Email : {user?.email}</Text>
            <Text>Mobile : {user?.mobile}</Text>
          </Top>
          <Bottom>
            <Button>My Orders</Button>
            <Button>Update Profile</Button>
            <Button>Change Password</Button>
          </Bottom>
        </Right>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Profile;
