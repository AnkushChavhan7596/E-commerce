import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name : "user",

    initialState : {
        users : null
    },

    reducers : {

        SET_USERS : (state, action) => {
            state.users = action.payload
        },

        DELETE_USER : (state, action) => {
            state.users = state.users.filter((user) => user._id !== action.payload._id)
        }

    }
})

export const { SET_USERS, DELETE_USER} = usersSlice.actions;
export default usersSlice.reducer;