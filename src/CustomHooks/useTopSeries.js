import React from 'react';
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularTvSeries, addTopTvSeries } from "../utils/movieSlice";

const useTopSeries = () => {
    const dispatch=useDispatch();
    const getTopTvSeries=async ()=>{
        const data =await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        dispatch(addTopTvSeries(json?.results));
    }
    useEffect(()=>{
        getTopTvSeries();
    },[])
}
export default useTopSeries;
