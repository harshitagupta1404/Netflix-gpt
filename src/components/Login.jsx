import { useRef, useState } from "react";
import { validateData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const username = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [errorMsg, updateErrorMsg] = useState(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    // This is to prevent data submission and reloading of page
    e.preventDefault();
    console.log(username,password);
    let err = validateData(username.current.value, password.current.value);
    if (err) {
      updateErrorMsg(err);
    } else {
      updateErrorMsg(null); // Clear error message on successful validation
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center">
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
      ></img>
      <form className="relative p-7 bg-black bg-opacity-75 text-white my-36 w-90" onSubmit={handleSubmit}>
        <h1 className="font-bold m-2 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            className="border p-3 my-2 w-full"
            type="text"
            placeholder="Full Name"
            id="fullname"
          />
        )}
        <input
          ref={username}
          className="border p-3 my-2 w-full"
          type="text"
          placeholder="Email or mobile number"
          id="username"
        />
        <br />
        <input
          ref={password}
          className="border p-3 my-2 w-full"
          type="password"
          placeholder="Password"
          id="pwd"
        />
        <br />
        {!isSignInForm && (
          <input
            className="border p-3 my-2 w-full"
            type="text"
            placeholder="Re-enter password"
            id="pwd2"
          />
        )}
        {errorMsg && <p className="text-red-600 font-bold">{errorMsg}</p>}
        <button
          className="bg-red-600 p-3 my-2 font-bold w-full cursor-pointer"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-1 my-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Register? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
