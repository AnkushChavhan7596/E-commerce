import { useSelect } from "@mui/base";
import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import AdminUser from "../Components/AdminUser";
import { SET_USERS } from "../redux/usersSlice";

const Wrapper = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  letter-spacing: 1px;
  padding: 10px 20px;
  color: gray;
  border-bottom: 1px solid #00000020;
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HomeWrapper = styled.div``;

const Button = styled.button`
  padding: 7px 30px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00000020;
  }
`;

const UsersWrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 20px;
`;

const AdminDashboard = () => {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/", { replace: true });
  };

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // fetch all users
  const fetchAllUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/user/users", {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });

      if (res.status === 200) {
        console.log(res)
        dispatch(SET_USERS(res.data.users));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [dispatch]);

  return (
    <Wrapper>
      <Heading>Dashborad</Heading>

      <ButtonsWrapper>
        <Button onClick={moveToHome}>Home</Button>
        <Button>Users</Button>
        <Button>Products</Button>
        <Button>Add Product</Button>
      </ButtonsWrapper>

      <HomeWrapper>
        <UsersWrapper>
          {users?.map((user_item) => {
            return <AdminUser user_item={user_item} key={user_item._id} />;
          })}
        </UsersWrapper>
      </HomeWrapper>
    </Wrapper>
  );
};

export default AdminDashboard;
