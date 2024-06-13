import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';


const VideoBackground = ({movieId}) => {
    const trailerVideos=useSelector((store)=>store.movies?.trailerVideo)
    const dispatch=useDispatch();
    const getMovieTrailer=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS,
          {
          mode: 'no-cors'
      });
        const json=await data.json();
        // console.log(json);
        const filterData=json?.results?.filter((video)=>video?.type==="Trailer");
        // if(!filterData){
        //   return null;
        // }
        // console.log(filterData);
        const trailer=filterData?.length ? filterData[0] : json?.results[0];
        // console.log(trailer);
        dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
        getMovieTrailer();
    },[]);

  return (
    <div className=" my-0 py-0 ">
        <iframe className="w-screen aspect-video my-0 py-0" src={"https://www.youtube.com/embed/"+trailerVideos?.key+"?&autoplay=1&mute=1"} title="YouTube video player" ></iframe>
    </div>
  )
}

export default VideoBackground;