import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video  pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="py-2 text-lg w-3/4">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 rounded-lg px-12 text-xl hover:bg-opacity-70 ">Play</button>
            <button className="bg-gray-500 text-black p-4 rounded-lg px-12 text-xl  m-4 hover:bg-opacity-70 ">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;