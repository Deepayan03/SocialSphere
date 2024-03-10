import "./SignUp.css";
import { FormEvent, useState } from "react";
import { RiEye2Line } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// userSlicetype import
import { addUser, userSliceType } from "../../reducers/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../reducers/ComboReducers";
import { login } from "../../config/config";

const SignUp: React.FC = () => {
  const [passStatus, setPassStatus] = useState(true);
  const [CpassStatus, setCPassStatus] = useState(true);

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");

  const clickPassIcon = () => {
    const status =
      document.querySelector("#userpassword") as HTMLInputElement;
    setPassStatus((prev) => !prev);

    if (status) {
      if (status.type === "password") {
        status.type = "text";
      } else {
        status.type = "password";
      }
    }
  };

  const clickCPassIcon = () => {
    const status = document.querySelector(
      "#userConfirmPassword"
    ) as HTMLInputElement;
    setCPassStatus((prev) => !prev);

    if (status) {
      if (status.type === "password") {
        status.type = "text";
      } else {
        status.type = "password";
      }
    }
  };

  const dispatch = useDispatch();
  const users = useSelector((state: RootReducerType) => state.UserSlice.users);

  // Form handle done here
  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passWord === cPassword) {
      // create a user with value
      const user: userSliceType = {
        userName: userName,
        userEmail: userEmail,
        userPassword: passWord,
        userStatus: false
      };

      dispatch(addUser(user));

      setUserName("");
      setUserEmail("");
      setPassword("");
      setCPassword("");
    } else {
      alert("Please Match the password...");
    }
  };

  return (
    <div className="body flex justify-center items-center w-screen h-screen bg-[#1f1e1e]">
      {/* Form Section */}
      <form
        className="form flex-col flex items-center w-[400px] p-[5vh] h-auto rounded-[15px] bg-[#36343434;]"
        onSubmit={formHandler}
      >
        <h1 className="heading text-center text-3xl font-bold text-white mb-2">
          Welcome Friend
        </h1>

        {/* dont't have account and signIn link */}
        <div className="sign-up-link w-full flex justify-center items-center mb-4">
          <h2 className="text-[#a7a2a28e] font-bold">
            Already have an account yet?
          </h2>
          <NavLink
            to={login}
            className={() => "text-white font-bold ml-2 hover:text-blue-500"}
          >
            Login
          </NavLink>
        </div>

        {/* user name */}
        <input
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          id="username"
          placeholder="Enter Username"
          className="input-box rounded-lg pl-4 w-full h-[6vh] mb-3 bg-[#2a2b2b] text-white font-bold"
        />

        {/* email section */}
        <input
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          id="useremail"
          placeholder="Enter Useremail"
          className="input-box rounded-lg pl-4 w-full h-[6vh] mb-3 bg-[#2a2b2b] text-white font-bold"
        />

        {/* PasswordSection */}
        <div className="password w-full h-[6vh] mb-3 rounded-lg bg-[#2a2b2b] relative">
          <input
            required
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="userpassword"
            placeholder="Enter password"
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
                color: "white"
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
                color: "white"
              }}
            />
          )}
        </div>

        {/* Confirm PasswordSection */}
        <div className="password w-full h-[6vh] mb-3 rounded-lg bg-[#2a2b2b] relative">
          <input
            required
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            type="password"
            id="userConfirmPassword"
            placeholder="Enter password"
            className="h-full w-[97%] rounded-lg pl-4 font-bold bg-[#2a2b2b] text-white"
          />

          {/* icon section */}
          {CpassStatus ? (
            <VscEyeClosed
              onClick={clickCPassIcon}
              style={{
                position: "absolute",
                fontSize: "4.5vh",
                top: "0",
                right: "25px",
                transform: "translate(50%,25%)",
                backgroundColor: "#2a2b2b",
                zIndex: "5",
                padding: "5px",
                color: "white"
              }}
            />
          ) : (
            <RiEye2Line
              onClick={clickCPassIcon}
              style={{
                position: "absolute",
                fontSize: "4.5vh",
                top: "0",
                right: "25px",
                transform: "translate(50%,25%)",
                backgroundColor: "#2a2b2b",
                zIndex: "5",
                padding: "5px",
                color: "white"
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

export default SignUp;
