import './SignUp.css';
import { useState } from 'react';
import { RiEye2Line } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const [passStatus, setPassStatus] = useState(true);
  const [CpassStatus, setCPassStatus] = useState(true);

  const clickPassIcon = () => {
    const status = document.querySelector("#userpassword");
    setPassStatus(prev => !prev);
    if (passStatus) {
      status.type = "text";
    } else {
      status.type = "password";
    }

  }

  const clickCPassIcon = () => {
    const status = document.querySelector("#userConformpassword");
    setCPassStatus(prev => !prev);
    if (CpassStatus) {
      status.type = "text";
    } else {
      status.type = "password";
    }
  }

  const mouseCircle = document.querySelector(".mouseMove");
  const screen = document.getElementById("root");

  const [x, setX] = useState('');
  const [y, setY] = useState('');

  screen.addEventListener("mousemove", (e) => {
    setX(e.x);
    setY(e.y);
    mouseCircle.style.top = y + "px";
    mouseCircle.style.left = x + "px";
  });


  return (
    <div className="body flex justify-center items-center w-screen h-screen bg-[#1f1e1e]">

      <div className="mouseMove w-[4vh] h-[4vh] absolute rounded-[50%] bg-white mix-blend-difference"></div>

      {/* Form Section */}
      <form className='form flex-col flex items-center w-[27vw] p-[5vh] h-auto rounded-[15px] bg-[#36343434;] '>

        <h1 className='heading text-center text-3xl font-bold text-white mb-2'>Welcome Friend</h1>

        {/* dont't have account and signIn link */}
        <div className="sign-up-link w-full flex justify-center items-center mb-4">
          <h2 className='text-[#a7a2a28e] font-bold'>Already have an account yet?</h2>
          <NavLink to="/signin" className={()=>("text-white font-bold ml-2 hover:text-blue-500")}>Login</NavLink>
          
        </div>

        {/* user name */}
        <input type="text" id="username" placeholder='Enter Username' className='input-box rounded-lg pl-4 w-full h-[6vh] mb-3 bg-[#2a2b2b] text-white font-bold' />

        {/* email section */}
        <input type="email" id="useremail" placeholder='Enter Useremail' className='input-box rounded-lg pl-4 w-full h-[6vh] mb-3 bg-[#2a2b2b] text-white font-bold' />

        {/* PasswordSection */}
        <div className="password w-full h-[6vh] mb-3 rounded-lg bg-[#2a2b2b] relative">

          <input type="password" id="userpassword" placeholder='Enter password' className='h-full w-[97%] rounded-lg pl-4 font-bold bg-[#2a2b2b] text-white' />

          {/* icon section */}
          {passStatus ?
            <VscEyeClosed onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "#2a2b2b", zIndex: "5", padding: "5px", color: "white" }} />
            :
            <RiEye2Line onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "#2a2b2b", zIndex: "5", padding: "5px", color: "white" }} />}

        </div>

        {/* Conform PasswordSection */}
        <div className="password w-full h-[6vh] mb-3 rounded-lg bg-[#2a2b2b] relative">

          <input type="password" id="userConformpassword" placeholder='Enter password' className='h-full w-[97%] rounded-lg pl-4 font-bold bg-[#2a2b2b] text-white' />

          {/* icon section */}
          {CpassStatus ?
            <VscEyeClosed onClick={clickCPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "#2a2b2b", zIndex: "5", padding: "5px", color: "white" }} />
            :
            <RiEye2Line onClick={clickCPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "#2a2b2b", zIndex: "5", padding: "5px", color: "white" }} />}

        </div>


        {/* login button */}
        <button className='submit-button rounded-lg w-full h-[6vh] mb-3 bg-blue-400 font-bold text-white'>Login</button>


        {/* Or section */}
        <div className="or-section  w-full mb-2 flex items-center">
          <div className="right-border w-[45%] h-[1px] bg-[#848383]"></div>
          <div className="or w-[10%] flex items-center justify-center text-[#848383] font-bold ">OR</div>
          <div className="left-border w-[45%] h-[1px] bg-[#848383]"></div>
        </div>

        {/* google , facebook , insta link */}
        <div className="links-section flex justify-between w-full">
          <div className="link-icon px-6 py-[5px] rounded-[5px] "><FcGoogle style={{ fontSize: "4vh" }} /></div>
          <div className="link-icon px-6 py-[5px] rounded-[5px] "><FaFacebookSquare style={{ color: "#4267B2", fontSize: "4vh" }} /></div>
          <div className="link-icon px-6 py-[5px] rounded-[5px]  "><FaApple style={{ color: "white", fontSize: "4vh" }} /></div>
        </div>

      </form>

    </div>
  )

}

export default SignUp;