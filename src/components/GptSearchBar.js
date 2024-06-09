import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI';

const GptSearchBar = () => {
    const searchText=useRef(null);
    const langKey=useSelector(store=>store.lang.lang);
    const handleGptSearchClick= async ()=>{
        // console.log(searchText.current.value);
        const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query:" + searchText.current.value+ ".Only give me name of 5 movies in a format like the example shown ahead. Example:1.Gadar 2.Sholay 3.Rockstar 4.Golmaal 5.DDLJ" ;
        const gptResults= await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        console.log(gptResults.choices);
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