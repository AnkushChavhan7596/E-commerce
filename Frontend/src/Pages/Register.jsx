import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #00000072, #00000057),
    url(https://thumbs.dreamstime.com/b/girl-friends-shopping-clothes-store-picture-143749390.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const FormContainer = styled.form`
  background-color: white;
  padding: 20px 60px;

  @media screen and (max-width: 420px) {
    padding: 20px 25px;
  }
`;

const InputWrapper = styled.div`
  margin: 15px 0;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  font-size: 15px;
  border: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  padding: 5px 20px;
  box-shadow: 1px 1px 5px #15151537;

  @media screen and (max-width: 390px) {
    width: 280px;
    padding: 5px 20px;
  }

  @media screen and (max-width: 350px) {
    width: 260px;
    padding: 5px 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  display: block;
  margin: 5px 0;
`;

const FormHeading = styled.h2`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding: 15px 10px;
`;

const Button = styled.button`
  padding: 7px 70px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  color: white;
  background-color: #6bd895;
  cursor: pointer;
`;

const BottomWrapper = styled.div`
  text-align: center;
`;

const BottomTxt = styled.p``;

const BottomLink = styled(Link)`
  margin-left: 10px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  font-size: 20px;
  color: #e3e3e3;
  margin: 10px;
  display: flex;
  align-items: center;
`;

const AdminSelect = styled.select`
  width: 200px;
  box-shadow: 1px 1px 5px #15151537;
  outline: none;
  border: none;
  padding: 10px 10px;
  padding-right: 20px;
`;

const Error = styled.p`
  color: red;
  border: 1px solid #ff1e1e9a;
  background-color: #ff000012;
  padding: 10px;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 14px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");


  const dispath = useDispatch();
  const user = useSelector((state)=>state.auth.user)

  const navigate = useNavigate();

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        name,
        email,
        mobile,
        password,
        cPassword,
      });

      console.log(res)

      if (res.status === 200) {

        // if(res.data.error){
        //   setError(res.data.msg);
        //   return
        // }

        dispath(login({...res.data.user,token : res.data.token})); // setting user

        localStorage.setItem("user", JSON.stringify({...res.data.user,token : res.data.token}));
        
        navigate("/",{replace: true});
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={handleFormSubmit}>
        <FormHeading>Register</FormHeading>

        <InputWrapper>
          <Label>Name : </Label>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Email : </Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Mobile No : </Label>
          <Input
            type="number"
            placeholder="Mobile No."
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </InputWrapper>

        {/* <InputWrapper>
          <Label>Admin : </Label>
          <AdminSelect>
            <option value="false">false</option>
            <option value="true">true</option>
          </AdminSelect>
        </InputWrapper> */}

        <InputWrapper>
          <Label>Password : </Label>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Confirm Password : </Label>
          <Input
            type="password"
            placeholder="Confirm password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button>Register</Button>
          {error && <Error>{error}</Error>}
        </ButtonWrapper>

        <BottomWrapper>
          <BottomTxt>
            Already have an account ?<BottomLink to="/login">Login</BottomLink>
          </BottomTxt>
        </BottomWrapper>
      </FormContainer>

      <LogoLink to="/">
        <ArrowBackIosIcon fontSize="small" />
        Home
      </LogoLink>
    </Wrapper>
  );
};

export default Register;
