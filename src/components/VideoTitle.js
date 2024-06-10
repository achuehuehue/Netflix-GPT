import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[25%] sm:pt-[20%] md:pt-[28%] lg:pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl">{title}</h1>
        <p className="hidden sm:hidden  md:hidden lg:inline-block py-2 text-lg w-3/4">{overview}</p>
        <div className="my-2" >
            <button className="bg-white text-black py-1 px-4 md:py-4 rounded-lg md:px-12 text-xl hover:bg-opacity-70 ">Play</button>
            <button className="hidden sm:hidden md:inline-block bg-gray-500 text-black p-4 rounded-lg px-12 text-xl  m-4 hover:bg-opacity-70 ">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;