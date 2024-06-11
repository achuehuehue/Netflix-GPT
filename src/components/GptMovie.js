import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const GptMovie = () => {
    const {movieNames,movieResults}=useSelector(store=>store.gpt);
    if(!movieNames){
        return null;
    }



  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white flex flex-wrap  ">
      {console.log("hiiiii")}
        {movieNames.map((movieNames,index)=>
            <div>
            <h1 className="" >{movieNames}</h1>
            <MovieCard key={movieNames} posterPath={movieResults[index][0]?.poster_path} movies={movieResults[index][0]} ></MovieCard>
            </div>)}
     </div>
  )
}

export default GptMovie;