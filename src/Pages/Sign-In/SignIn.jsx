import { useState } from 'react';
import { RiEye2Line } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";

import './SignIn.css';

const SignIn = () => {

  const [passStatus, setPassStatus] = useState(true);

  const clickPassIcon = () => {
    const status = document.querySelector("#userpassword");
    setPassStatus(prev => !prev);
    if (passStatus) {
      status.type = "text";
    } else {
      status.type = "password";
    }

  }

  const mouseCircle = document.querySelector(".mouseMove");
  const screen = document.getElementById("root");

  const [x,setX] = useState('');
  const [y,setY] = useState('');

  screen.addEventListener("mousemove", (e) => {
    setX(e.x);
    setY(e.y);
    mouseCircle.style.top = y + "px";
    mouseCircle.style.left = x + "px";
  });

  return (
    <div className="body flex justify-center items-center w-screen h-screen bg-[#1f1e1e] overflow-hidden relative">

      <div className="main">
        <div className="up"></div>
        <div className="down"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="mouseMove"></div>
      </div>

      {/* Form Section */}
      <form className='form flex-col flex items-center w-auto h-auto px-4 py-2 rounded-[15px] '>

        <h1 className='heading text-center text-5xl m-4 font-bold text-white'>Sign-In</h1>

        <input type="email" id="useremail" placeholder='Enter Useremail...' className='input-box rounded-lg pl-4 m-4 bg-transparent text-white font-bold' />

        {/* PasswordSection */}
        <div className="password rounded-lg m-4 bg-transparent relative">

          <input type="password" id="userpassword" placeholder='Enter password...' className='h-full w-[97%] rounded-lg pl-4 font-bold bg-transparent text-white' />

          {/* icon section */}
          {passStatus ?
            <VscEyeClosed onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "transparent", zIndex: "5", padding: "5px" }} />
            :
            <RiEye2Line onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "transparent", zIndex: "5", padding: "5px" }} />}

        </div>


        {/* Check Box Section */}
        <div className="check-conditions flex items-center">

          <input type="checkbox" name="usercheck" id="usercheck" className=' size-5 check-item mr-2 cursor-pointer' />

          <label htmlFor="usercheck" className='font-bold cursor-pointer text-white'>agree with all terms and conditions??</label>

        </div>

        <button className='submit-button rounded-lg m-4 font-bold text-white'>Submit</button>

      </form>

    </div>
  )
}

export default SignIn;
