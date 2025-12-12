import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const toggleSignIn=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="flex justify-center">
      <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"></img>
      <form className="relative p-7 bg-black bg-opacity-75 text-white my-36 w-90">
        <h1 className="font-bold m-2 text-2xl">{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && <input className="border p-3 my-2 w-full" type="text" placeholder="Full Name" id="fullname"/>}
        <input className="border p-3 my-2 w-full" type="text" placeholder="Email or mobile number" id="username"/><br/>
        <input className="border p-3 my-2 w-full" type="password" placeholder="Password" id="pwd"/><br/>
        {!isSignInForm && <input className="border p-3 my-2 w-full" type="text" placeholder="Re-enter password" id="pwd2"/>}
        <button className="bg-red-600 p-3 my-2 font-bold w-full cursor-pointer" type="submit">{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className="p-1 my-4 cursor-pointer" onClick={toggleSignIn}>{isSignInForm?"New to Netflix? Sign up now":"Already Register? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
