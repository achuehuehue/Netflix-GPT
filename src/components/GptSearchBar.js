import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import groq from '../utils/openAI';
import Error from './Error';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
    const searchText=useRef(null);
    const langKey=useSelector(store=>store.lang.lang);
    const dispatch=useDispatch(null);

    const searchMovie=async(movie)=>{
        const data =await fetch('https://api.themoviedb.org/3/search/movie?query=' +movie.name+ '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        return json.results;
    }

    const handleGptSearchClick= async ()=>{
        // console.log(searchText.current.value);
        const gptQuery=`Act as a Movie Recommendation System and
         suggest some movies containing `
          + searchText.current.value+ `The movie list should be in form of json object.
           The example is given below.
            [
            {
                "name": "Movie1",
                "genre": "genre1",
                "year": "XXXX"
              },
            ]` ;
        const result=await groq.chat.completions.create({
            messages: [
              {
                role: "user",
                content: gptQuery,
              },
            ],
            model: "llama3-8b-8192",
            temperature:0.0,
          });
          if(!result){
            <Error></Error>
          }
          const text=result?.choices[0]?.message?.content;
          const extractStringInsideCodeBlock = (text) => {
            const regex = /```([\s\S]*?)```/;
            const match = text.match(regex);
            if (match && match[1]) {
              return match[1].trim();
            }
            return null;
          };
          
          const extractedJson = JSON.parse(extractStringInsideCodeBlock(text));
        //   console.log(extractedJson);
          const extractedJsonName=extractedJson.map(x=>x?.name);
        //   console.log(extractedJsonName);
          const promiseArray=extractedJson.map(movie=>searchMovie(movie)); //[promise,promise,promise.....]
          const tmdbResult=await Promise.all(promiseArray);
          console.log(tmdbResult);
          dispatch(addGptMovieResults({movieNames:extractedJsonName,movieResults:tmdbResult}));
    }


  return (
    <div className="pt-[10%] flex justify-center" >
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="py-4 px-8 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button onClick={handleGptSearchClick} className="col-span-3 m-4 px-4 py-2 rounded-lg bg-red-700 hover:opacity-50 text-white" >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;