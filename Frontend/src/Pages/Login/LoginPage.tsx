import { FormEvent, useState } from "react";
import { RiEye2Line } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./LoginPage.css";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../reducers/ComboReducers";

const LoginPage = () => {
  const [passStatus, setPassStatus] = useState<boolean>(true);

  const [userEmail, setUserEmail] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");

  const clickPassIcon = () => {
    const status: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#userpassword");
    setPassStatus((prev) => !prev);
  
    if (status) {
      if (status.type === "password") {
        status.type = "text";
      } else {
        status.type = "password";
      }
    }
  };

  const users = useSelector((state:RootReducerType) => state.UserSlice.users);

  const loginFormHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
    const emailExists = users.some(user => user.userEmail === userEmail);
    const passwordCorrect = users.some(user => user.userPassword === passWord);

    if(emailExists && passwordCorrect){
      alert("Login SuccessFull...")
    }else{
      alert("Incorrect Value Provided...");
    }
    
    setUserEmail("");
    setPassword("");

  }
  

  return (
    <div className="body flex justify-center items-center w-screen h-screen bg-[#1f1e1e]">
      <div className="mouseMove w-[4vh] h-[4vh] absolute rounded-[50%] bg-white mix-blend-difference"></div>

      {/* Form Section */}
      <form className="form p-[5vh] flex-col flex items-center w-auto h-auto rounded-[15px] bg-[#36343434;] " onSubmit={loginFormHandler}>
        <h1 className="heading text-center text-3xl font-bold text-white mb-2">
          Welcome back
        </h1>

        <div className="sign-up-link w-full flex mb-4">
          <h2 className="text-[#a7a2a28e] font-bold">
            Don't have an account yet?
          </h2>
          <NavLink
            to="/signup"
            className={() => "text-white font-bold ml-2 hover:text-blue-500"}>
            SignUp
          </NavLink>
        </div>

        {/* email section */}
        <input
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
          type="email"
          id="useremail"
          placeholder="Enter Useremail..."
          className="input-box rounded-lg pl-4 w-full h-[6vh] mb-3 bg-[#2a2b2b] text-white font-bold"
        />

        {/* PasswordSection */}
        <div className="password w-full h-[6vh] mb-3 rounded-lg bg-[#2a2b2b] relative">
          <input
          value={passWord}
          onChange={e => setPassword(e.target.value)}
            type="password"
            id="userpassword"
            placeholder="Enter password..."
            className="h-full w-[97%] rounded-lg pl-4 font-bold bg-[#2a2b2b] text-white"
          />

          {/* icon section */}
          {passStatus ? (
            <VscEyeClosed
              onClick={clickPassIcon}
              style={{
                position: "absolute",
                fontSize: "4.5vh",
                top: "0",
                right: "25px",
                transform: "translate(50%,25%)",
                backgroundColor: "#2a2b2b",
                zIndex: "5",
                padding: "5px",
                color: "white",
              }}
            />
          ) : (
            <RiEye2Line
              onClick={clickPassIcon}
              style={{
                position: "absolute",
                fontSize: "4.5vh",
                top: "0",
                right: "25px",
                transform: "translate(50%,25%)",
                backgroundColor: "#2a2b2b",
                zIndex: "5",
                padding: "5px",
                color: "white",
              }}
            />
          )}
        </div>

        {/* login button */}
        <button className="submit-button rounded-lg w-full h-[6vh] mb-3 bg-blue-400 font-bold text-white">
          Login
        </button>

        {/* Or section */}
        <div className="or-section  w-full mb-2 flex items-center">
          <div className="right-border w-[45%] h-[1px] bg-[#848383]"></div>
          <div className="or w-[10%] flex items-center justify-center text-[#848383] font-bold ">
            OR
          </div>
          <div className="left-border w-[45%] h-[1px] bg-[#848383]"></div>
        </div>

        {/* google , facebook , insta link */}
        <div className="links-section flex justify-between w-full">
          <div className="link-icon px-6 py-[5px] rounded-[5px] ">
            <FcGoogle style={{ fontSize: "4vh" }} />
          </div>
          <div className="link-icon px-6 py-[5px] rounded-[5px] ">
            <FaFacebookSquare style={{ color: "#4267B2", fontSize: "4vh" }} />
          </div>
          <div className="link-icon px-6 py-[5px] rounded-[5px]  ">
            <FaApple style={{ color: "white", fontSize: "4vh" }} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
