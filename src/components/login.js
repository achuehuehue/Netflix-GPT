import React, { useState,useRef } from 'react';
import Header from './header';
import { CheckValidation } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const toggle=()=>{
        setIsSignIn(!isSignIn);
    }
    const email=useRef(null);
    const password=useRef(null);
   
    const validate=()=>{
        const message=CheckValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message!=null){
            //invalid 
            return;
        }
        if(!isSignIn){
            //sign up
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
         })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("No Such Email ID exists")
        // ..
        });

        }
        else{
            //sign in
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                 // ...
                })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage("No Such User exists");
            });
        }
    }

  return (
    <div >
        <Header></Header>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
        </div>
        <div >
            <form onSubmit={(e)=>e.preventDefault()} className="bg-black absolute p-12 w-[30%] my-32 mx-auto right-0 left-0  text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn &&
                (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-md"></input>)
                }
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-md"></input>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-md"></input>
                <p className="text-red-500 font-bold" >{errorMessage}</p>
                <button className="bg-red-700 p-4 my-6 w-full rounded-md" onClick={validate}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="">{isSignIn ? "New to NetflixGPT?" : "Already a User?"} <span onClick={toggle} className="underline cursor-pointer">
                    {isSignIn ? "Sign Up" : "Sign In"}</span> now!!!</p>
            </form>
        </div>
    </div>
  )
}
export default Login;
