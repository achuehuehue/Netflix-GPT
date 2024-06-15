import React from 'react';
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularTvSeries } from "../utils/movieSlice";


const usePopularTvSeries = () => {
    const dispatch=useDispatch();
    const getPopularTvSeries=async ()=>{
       try{
        const data =await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        dispatch(addPopularTvSeries(json?.results));
       }
       catch(error){
        console.log(error);
       }
    }
    useEffect(()=>{
        getPopularTvSeries();
    },[])
}

export default usePopularTvSeries;