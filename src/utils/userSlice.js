import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
    {
        name:"user",
        initialState:null, //since initially there are no users
        reducers:{
            addUser:(state,action)=>{
                return action.payload;
            },
            removeUser:(state)=>{
                return null;
            },
        },
    }
);
export const {addUser,removeUser} =userSlice.actions;

export default userSlice.reducer;