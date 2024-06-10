import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(movies===null)return;
    

    const mainMovie=movies[0];
    // console.log(mainMovie.id)
  return (
    <div className="pt-[24%] sm:pt-[10%] md:pt-[5%] lg:pt-[1%] bg-black  w-screen ">
        <VideoTitle  title={mainMovie.original_title} overview={mainMovie.overview}  ></VideoTitle>
        <VideoBackground  movieId={mainMovie.id}></VideoBackground>
    </div>
  )
}

export default MainContainer;