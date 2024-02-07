
import ProfilePic from "./ProfilePic";
import HomeIcon from "./HomeIcon";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
            {/* nav bar */}
            <div className="main-r-top h-[10%] w-full border-b-2 p-2 border-[#383636d1] flex items-center justify-between ">
                {/* navbar left side */}
                <div className="main-r-top-left flex w-[50%] h-max ">
                    <HomeIcon item={{ fontSize: "35px", textSize: "30px", width: "10vw", marginLeft: "10px", iconColor: "white" }} />

                    {/* Explore Section */}
                    <div className="explore-container ml-8 w-max h-[7vh] flex bg-[#3a3b446c] rounded-md">
                        <div className="explore-item w-max h-[5vh] p-4 flex items-center justify-center m-2 rounded-md text-white"><h2>Explore</h2></div>
                        <div className="explore-item w-max h-[5vh] p-4 flex items-center justify-center m-2 rounded-md text-white"><h2>Community feed</h2></div>
                        <div className="explore-item w-max h-[5vh] p-4 flex items-center justify-center m-2 rounded-md text-white "><h2>Mutual friend </h2>
                            <p className='w-[5vh] h-[4vh] ml-[5px] flex items-center justify-center text-white rounded-[20px] bg-[#25262cc4]'>12</p>
                        </div>
                    </div>

                </div>

                {/* navbar right side */}
                <div className="main-r-top-right flex items-center w-max h-max  ">

                    <div className="notification-section mx-2 w-max h-[7vh] flex items-center rounded-md">

                        <div className="message-notify w-[5vh] h-[5vh] rounded-[50%] border-[2px] border-[#504d4dd1] flex items-center justify-center m-2 cursor-pointer">
                            <AiFillMessage style={{ color: "white" }} />
                        </div>

                        <div className="message-notify w-[5vh] h-[5vh] rounded-[50%] border-[2px] border-[#504d4dd1] flex items-center justify-center m-2 cursor-pointer">
                            <IoNotificationsSharp style={{ color: "white" }} />
                        </div>

                    </div>

                    {/* User Profile and Pic  */}
                    <div className="user-profile-icon mx-4 flex items-center justify-center">
                        <h4 className='text-white mr-2'>Hero Alam</h4>
                        <ProfilePic />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar