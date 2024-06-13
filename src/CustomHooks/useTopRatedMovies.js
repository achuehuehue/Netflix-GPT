import React from 'react';
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularTvSeries, addTopMovies, addTopTvSeries } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch=useDispatch();
    const getTopMovies=async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS,
            {
            mode: 'no-cors'
        });
        const json=await data.json();
        // console.log(json.results);
        dispatch( addTopMovies(json?.results));
    }
    useEffect(()=>{
        getTopMovies();
    },[])
}

export default useTopRatedMovies;