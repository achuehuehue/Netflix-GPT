import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularTvSeries:null,
        topTvSeries:null,
        topMovies:null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularTvSeries:(state,action)=>{
            state.popularTvSeries=action.payload;
        },
        addTopTvSeries:(state,action)=>{
            state.topTvSeries=action.payload;
        },
        addTopMovies:(state,action)=>{
            state.topMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        },

    }
});

export const {addMovies,addPopularTvSeries,addTopTvSeries,addTopMovies,addPopularMovies,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;