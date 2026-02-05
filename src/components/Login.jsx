import React,{useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
        ></img>
      </div>

      <div>
        <form className=" rounded-lg justify-between text-white w-1/4 absolute my-60 mx-auto right-0 left-0 border-amber-500 bg-black p-4 m-4 opacity-80">
          <h1 className="text-2xl font-bold pb-4 text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
          
          {!isSignInForm && <input
            type="text"
            className="w-full p-2 border-white rounded-lg mb-3 bg-gray-700"
            placeholder="Name"
          ></input>}
          
          <input
            type="text"
            className="w-full p-2 border-white  rounded-lg mb-3 bg-gray-700"
            placeholder="Email or mobile number"
          ></input>
          <input
            type="password"
            className="bg-gray-700 w-full p-2 border-white rounded-lg  mb-3"
            placeholder="Password"
          ></input>
          <button className="w-full bg-red-700 p-2 my-3  rounded-lg text-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-xs my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "Are you new to Netflix ? Sign up now !": "Already a registered user? Sign In now"}</p>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
