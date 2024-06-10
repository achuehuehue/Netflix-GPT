import React, { useEffect, useRef } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { addLang } from '../utils/langSlice';

const Header = () => {
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
    const user=useSelector((store)=>store.user);
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const signOutOption=()=>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
            navigate("/error");
          });
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName})); 
              navigate("/browse");
            } 
            else {
              // User is signed out
              dispatch(removeUser());  
              navigate("/"); 
            }
          });
    },[]);
    const GPT_search=()=>{
      dispatch(toggleGptSearch());
    }
    const handleLangChange=(e)=>{
      // console.log(e.target.value);
      dispatch(addLang(e.target.value));
    }
    


  return (
    <div>
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <h1 className="text-red-700 text-5xl mx-auto md:mx-0 " >NetflixGPT</h1>
            {user && (
                <div className=" flex p-2 justify-between">
                    {
                      showGptSearch ? 
                      <div className="flex justify-center md:ml-auto sm:ml-auto ml-auto">
                        <select  className=" p-2 m-2 bg-gray-900 text-white " onChange={handleLangChange}>
                          <option value="en" >English</option>
                          <option value="hindi">Hindi</option>
                        </select>
                        <button className="py-2 my-2 px-4 mx-4 bg-purple-800 rounded-lg hover:opacity-50" onClick={GPT_search} >{showGptSearch ?
                       "Home Page" : "GPT Search"}</button>
                        {/* <img className=" " src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"></img> */}
                        <button className="py-2 my-2 px-4 mx-4 font-bold  bg-black rounded-lg text-red-700  cursor-pointer  hover:bg-white" onClick={signOutOption}>Sign out</button>
                        </div>
                      :
                      
                      <div className="flex justify-center md:ml-auto sm:ml-auto ml-auto">
                      <button className="py-2 my-2 px-4 mx-4  bg-purple-800 rounded-lg hover:opacity-50" onClick={GPT_search} >{showGptSearch ?
                      "Home Page" : "GPT Search"}</button>
                      {/* <img className=" " src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"></img> */}
                      <button className="py-2 my-2 px-4 mx-4 font-bold  bg-black rounded-lg text-red-700  cursor-pointer  hover:bg-white" onClick={signOutOption}>Sign out</button>
                      </div>
                    }
            </div>)}
        </div>
        
            
        
    </div>
  )
}
export default Header;