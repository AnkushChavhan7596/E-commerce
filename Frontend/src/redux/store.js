
import { configureStore } from '@reduxjs/toolkit'

import authReducer from "../redux/authSlice";
import usersReducer from "../redux/usersSlice";

export default configureStore({
    reducer : {
        auth : authReducer, 
        users : usersReducer
    },
})