import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"lang",
    initialState:{
        lang:"en",
    },
    reducers:{
        addLang:(state,action)=>{
            state.lang=action.payload;
        },
    },
})
export const {addLang}=langSlice.actions;
export default langSlice.reducer;
