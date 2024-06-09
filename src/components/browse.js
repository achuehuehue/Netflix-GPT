import React from 'react'
import Header from './header';
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';
import usePopularTvSeries from '../CustomHooks/usePopularTvSeries';
import useTopSeries from '../CustomHooks/useTopSeries';
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';



const Browse = () => {
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);


    useNowPlayingMovies();
    usePopularTvSeries();
    useTopSeries();
    useTopRatedMovies();
    usePopularMovies();

  return (
       <div>
         <Header></Header>
         {
          showGptSearch ? <GptSearch></GptSearch> :
          <div>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
          </div>
         }
       </div>
        
        
  )
}

export default Browse;