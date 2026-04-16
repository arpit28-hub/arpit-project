import React, { useState } from "react";
import Title from "../components/Title";
const Login = () => {
  const [currentState, setCurrentState] = useState(false);
  // const [fp, setFp]=useState()
  return (
    <div className="text-center mt-10">
      <Title text2={currentState ? "Sign Up" : "Login"} onClick={() => setCurrentState(!currentState)} />
      <div className=" py-10 gap-4 min-w-[350px] max-w-[400px] w-full  mx-auto border border-gray-300 bg-gray-100 px-6">
        <div className={`border mb-6 ${currentState ? '' : 'hidden'}`}>
          <input
            type="text"
            placeholder="Username"
            className="border w-full py-1  px-4"
          />
        </div>
        <div className="">
          <input
            placeholder="Email"
            type="email"
            className="border w-full py-1 px-4 "
          />
        </div>
        <div className="mt-6">
          <input
            type="password"
            placeholder="password"
            className="border w-full py-1 px-4 "
          />
        </div>
        <div className="flex justify-between mt-1">
          <p className={`${currentState?'hidden':''}`}>Forgot Password</p>
          <p onClick={()=>setCurrentState(true)} className={`${currentState?'hidden':''} cursor-pointer`}>Sign Up</p>
          <p onClick={()=>setCurrentState(false)} className={`text- ${currentState?'':'hidden'} cursor-pointer`}>Back To Login</p>
        </div>
        <button className={`px-4 py-1 border bg-blue-600 text-white cursor-pointer ${currentState?'hidden':''}`}>LOGIN</button>
        <button className={`px-4 py-1 border bg-blue-600 text-white cursor-pointer ${currentState?'':'hidden'}`}>SIGN UP</button>

      </div>
    </div>
  );
};

export default Login;
