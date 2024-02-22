// Import CSS file
import "./contactUs.css";

// Import image file
import mailingPhoto from "../../assets/Icons/mailing.png";
// Import React Icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaApple } from "react-icons/fa";

// Import useState hook from React
import { useState } from "react";

const ContactUs = () => {
  const mouseCircle: any = document.querySelector(".mouseMove");
  const screen: any = document.getElementById("root");

  const [x, setX] = useState("");
  const [y, setY] = useState("");

  screen.addEventListener("mousemove", (e: any) => {
    setX(e.x);
    setY(e.y);
    mouseCircle.style.top = y + "px";
    mouseCircle.style.left = x + "px";
  });

  return (
    <div className="main-wrapper min-h-screen w-screen flex relative flex-col md:flex-row md:justify-center md:items-center  item-center justify-around px-4  bg-[#1f1e1e] text-white">
      <div className="mouseMove w-[4vh] h-[4vh] absolute rounded-[50%] bg-white mix-blend-difference"></div>

      {/* wrapper body */}
      <div className="wrapper-body md:w-auto overflow-hidden md:flex relative md:justify-center p-4 md:flex-row rounded-[15px]">
        <div className="triangle bg-[#519bf0a3] w-[10vw] h-[50vh] absolute top-[-20vh] left-[5vh] rounded-[10vh]"></div>

        <div className="triangle bg-[#9bacc7ed] w-[10vw] h-[50vh] absolute top-[-2vh] left-[-17vh] rounded-[10vh]"></div>

        {/* Left Part */}
        <div className="left-part flex gap-3 flex-col p-4 rounded-[15px] md:justify-center">
          <div className=" md:self-center flex flex-col gap-1 ">
            <h1 className="lets-talk text-5xl text-center z-10 mt-4 font-extrabold">
              Let's Talk
            </h1>
            <h1 className="feedback-title text-center w-[25vw] text-[15px] z-10 font-bold leading-tight">
              We Love Your Feedback. Review on How to Serve You. We Always
              Listen
            </h1>
          </div>

          {/* PNG image */}
          <div className=" md:self-center z-10 flex justify-center items-center">
            <img src={mailingPhoto} alt="mailing image" width={250} />
          </div>
        </div>

        {/* right part */}
        <div className="right-part p-4 flex gap-5 flex-col rounded-[15px] bg-[#45444438] md:items-center md:justify-center ">
          <div className=" md:flex md:justify-center md:items-center">
            {/* form section */}
            <form className="flex flex-col font-mono gap-2">
              <label className="font-bold" htmlFor="username">
                What is your Name?
              </label>
              <input
                className="username px-3 w-full h-[6vh] rounded-lg  bg-[#3d3c3c38] text-white border-[1px] border-[#79797938]"
                type="text"
              />
              <label className="font-bold" htmlFor="useremail">
                What email address can we reach you at?
              </label>
              <input
                className="useremail px-3 w-full h-[6vh] rounded-lg  bg-[#3d3c3c38] text-white border-[1px] border-[#79797938]"
                type="email"
              />
              <label className="font-bold" htmlFor="user-feedback">
                How can we help you?
              </label>
              <input
                className="user-feedback w-full h-[6vh]  px-3  rounded-lg bg-[#3d3c3c38] text-white border-[1px] border-[#79797938]"
                type="text"
              />
              <button
                type="submit"
                className="w-full h-[6vh] font-bold text-[20px] mt-2 bg-blue-700 rounded-lg ">
                Submit
              </button>
            </form>
          </div>

          {/* Links */}
          <div className=" flex justify-center items-center flex-col">
            <div className=" mb-1">Got connected with</div>
            <div className="flex gap-4">
              <FcGoogle style={{ fontSize: "4vh" }} />
              <FaFacebookSquare style={{ color: "#4267B2", fontSize: "4vh" }} />
              <FaApple style={{ color: "white", fontSize: "4vh" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
