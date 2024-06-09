import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovie from './GptMovie'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
        </div>
        <GptSearchBar></GptSearchBar>
        <GptMovie></GptMovie>
    </div>
  )
}

export default GptSearch