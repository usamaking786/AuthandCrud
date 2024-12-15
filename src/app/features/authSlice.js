import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user : {
        username : "",
        email : "",
        fullname : "",
        password : ""
    }
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUser: (state,action) => {
            state.user = action.payload

        },
        loginUser: (state,action) => {
            state.user = action.payload
        },
        logoutUser: (state,action) => {
            state.user = action.payload
        }

    }
})

export const {registerUser,loginUser,logoutUser} = authSlice.actions
export default authSlice.reducer