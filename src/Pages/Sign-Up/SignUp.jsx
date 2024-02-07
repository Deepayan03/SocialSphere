import { useState } from 'react';
import './SignUp.css';
import { RiEye2Line } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
const SignUp = () => {

  const [passStatus, setPassStatus] = useState(true);
  const [consformStatus, setConsformStatus] = useState(true);

  const clickPassIcon = () => {
    const status = document.querySelector("#userpassword");
    setPassStatus(prev => !prev);
    if (passStatus) {
      status.type = "text";
    } else {
      status.type = "password";
    }

  }

  const clickConformPassIcon = () => {
    const status = document.querySelector("#Cuserpassword");
    setConsformStatus(prev => !prev);
    if (consformStatus) {
      status.type = "text";
    } else {
      status.type = "password";
    }
  }

  return (
    <div className="body flex justify-center items-center flex-col w-screen h-screen bg-[#f2efef] relative">

      <div className="circle1 h-[200px] w-[200px] bg-yellow-400 rounded-[50%] blur-[100px] absolute top-[5vh] left-[30vw]">
      </div>

      <div className="circle2 h-[200px] w-[200px] bg-[#5bf6ca] rounded-[50%] blur-[80px] absolute bottom-0 right-[28vw]">
      </div>

      <form className='form flex-col flex items-center w-auto h-auto px-4 py-2 rounded-lg '>

        <h1 className='heading text-center text-5xl m-4 font-bold'>Sign-Up</h1>

        <input type="text" id="username" placeholder='Enter Username...' className='input-box rounded-lg pl-4 m-4 bg-white font-bold' />

        <input type="email" id="useremail" placeholder='Enter Useremail...' className='input-box rounded-lg pl-4 m-4 bg-white font-bold' />

        {/* PasswordSection */}
        <div className="password rounded-lg m-4 bg-white relative">

          <input type="password" id="userpassword" placeholder='Enter password...' className='h-full w-[97%] rounded-lg pl-4 font-bold' />

          {/* icon section */}
          {passStatus ?
            <VscEyeClosed onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "white", zIndex: "5", padding: "5px" }} />
            :
            <RiEye2Line onClick={clickPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "white", zIndex: "5", padding: "5px" }} />}

        </div>

        {/* Conform User Password Section */}
        <div className="password rounded-lg m-4 bg-white relative">

          <input type="password" id="Cuserpassword" placeholder='Enter Conform password...' className='h-full w-[97%] rounded-lg pl-4 font-bold' />

          {/* icon section */}
          {consformStatus ?
            <VscEyeClosed onClick={clickConformPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "white", zIndex: "5", padding: "5px" }} />
            :
            <RiEye2Line onClick={clickConformPassIcon} style={{ position: "absolute", fontSize: "4.5vh", top: "0", right: "25px", transform: "translate(50%,25%)", backgroundColor: "white", zIndex: "5", padding: "5px" }} />}

        </div>

        {/* Check Box Section */}
        <div className="check-conditions flex items-center">

          <input type="checkbox" name="usercheck" id="usercheck" className=' size-5 check-item mr-2 cursor-pointer' />

          <label htmlFor="usercheck" className='font-bold cursor-pointer'>agree with all terms and conditions??</label>

        </div>

        <button className='submit-button rounded-lg m-4 font-bold'>Submit</button>


      </form>

      {/* Login Box Section */}
      <div className="login-box flex items-center justify-center p-4">
        <p className='font-bold mr-4'>Already have a User Account ? </p>
        <a href="#">Login</a>
      </div>
      
    </div>
  )
}

export default SignUp