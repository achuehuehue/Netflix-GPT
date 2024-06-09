import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
    // console.log(movies);
  return (
    
      movies.nowPlayingMovies &&
        (
        <div className="w-screen bg-black">
          <div className="-mt-52 pl-6 relative z-10">
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}></MovieList>
          <MovieList title={"Popular Series"} movies={movies.popularTvSeries}></MovieList>
          <MovieList title={"Top Rated Series"} movies={movies.topTvSeries}></MovieList>
          <MovieList title={"Top Rated Movies"} movies={movies.topMovies}></MovieList>
          <MovieList title={"Popular Movies"} movies={movies.popularMovies}></MovieList>
          </div>
        </div>)
  
  )
}

export default SecondaryContainer