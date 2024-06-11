import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./movieSlice.js";
import gptReducer from "./gptSlice.js";
import langReducer from "./langSlice.js";


const appstore=configureStore(
    {
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        lang:langReducer,
    },
    }
);
export default appstore;