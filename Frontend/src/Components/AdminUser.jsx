import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DELETE_USER } from "../redux/usersSlice";

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  margin: 10px;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #1a1a1a;
  margin: 5px;
  margin-bottom: 10px;
  letter-spacing: .3px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffffdd;
  outline: none;
  border: none;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 5px;
  letter-spacing: 1px;
`;

const AdminUser = ({user_item}) => {

  const dispatch = useDispatch();

  const handleDelete = async () => {
    try{
      const res = await axios.delete(`http://localhost:8800/api/user/${user_item._id}`,{headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` }});
      
      if(res.status === 200){
        dispatch(DELETE_USER(user_item))
      }
         
    }catch(error){
      console.log(error.message)
    }
   
  }

  return (
    <Wrapper>
      <Left>
        <Text>Name : {user_item.name}</Text>
        <Text>Email : {user_item.email}</Text>
        <Text>Mobile No : {user_item.mobile}</Text>
      </Left>
      <Right>
        <Button style={{"backgroundColor":"#1048a3c8"}} >Edit</Button>
        <Button style={{"backgroundColor":"#a31010be"}} onClick={handleDelete}>Delete</Button>
      </Right>
    </Wrapper>
  );
};

export default AdminUser;
