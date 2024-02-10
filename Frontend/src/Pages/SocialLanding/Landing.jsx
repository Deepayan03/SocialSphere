/* eslint-disable no-unused-vars */

import './Landing.css';
import Cat from '../../assets/Icons/cat.jpg';
import { IoIosSearch } from "react-icons/io";
import { PiUsersFour } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

// bookmark
import { IoBookmarkOutline } from "react-icons/io5";
// three dot
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// like
import { BiLike } from "react-icons/bi";
// comment
import { BiCommentDetail } from "react-icons/bi";
// share
import { PiShareBold } from "react-icons/pi";
// uparrow
import { BiUpArrowAlt } from "react-icons/bi";
// down arrow
import { BiDownArrowAlt } from "react-icons/bi";

// ========================import components=======================
import HomeIcon from '../../Components/HomeIcon';
import ProfilePic from '../../Components/ProfilePic';
import PostCard from '../../Components/PostCard';
import ProfileWithSearch from '../../Components/ProfileWithSearch';
import FollowersCard from '../../Components/FollowersCard';
import Navbar from '../../Components/Navbar';
import FriendsCard from '../../Components/FriendsCard';


const Landing = () => {
  return (
    <div className="main-wrapper bg-[#000000d6] w-screen h-max flex">
    
      {/* Left side bar */}
      <div className="main-left w-[20%] h-max ">

        {/* left bar icon section */}
        <div className="icon-div w-full h-[10%] flex items-center  pl-8 pt-4">
          <span className="icon-name text-blue-700 text-[4vh] font-extrabold mb-[5px]" style={{ letterSpacing: "1px" }}>Social Sphere</span>
        </div>

        {/* left bar search section */}
        <div className="search-div w-full h-[10%] flex pt-4 mb-4 items-center pl-8 ">

          <div className="search-icon relative w-[75%] h-[5vh]">
            {/* search icon */}
            <IoIosSearch style={{ top: "5px", position: "absolute", fontSize: "27px", paddingLeft: "5px", color: "#464c58" }} />
            {/* input tag */}
            <input type="text" id="searchItem" placeholder="Explore Heroine" className="search-item border-y-[2px] bg-[#25262cc4] border-x-[#343943] border-y-[#343943] border-x-[2px] w-full h-full rounded-[10px] pl-8 text-white text-[15px]" />
          </div>

        </div>

        {/* Pages section */}
        <div className="pages-div w-full h-maxflex items-center">
          {/* wrapper in which all pages exists */}
          <div className="pages-wrapper w-full h-full pl-8">

            {/* home icon with home page link */}
            <HomeIcon item={{ fontSize: "27px", textSize: "15px", width: "75%", paddingLeft: "5px", iconColor: "#2b86fe" }} />

            <div className="page-item flex items-center justify-center w-[75%] h-[7vh]">
              {/* search icon */}
              <PiUsersFour style={{ top: "5px", fontSize: "27px", paddingLeft: "5px", color: "#2b86fe" }} />
              {/* input tag */}
              <div className="pages-item cursor-pointer w-full h-full flex items-center
              pl-2  text-[#bdc9d8] text-[15px]">Community</div>
            </div>

            <div className="page-item flex items-center justify-center w-[75%] h-[7vh]">
              {/* search icon */}
              <PiBag style={{ top: "5px", fontSize: "27px", paddingLeft: "5px", color: "#2b86fe" }} />
              {/* input tag */}
              <div className="pages-item cursor-pointer w-full h-full flex items-center
              pl-2 rounded-md  text-[#bdc9d8] text-[15px] hover:text-[#2b86fe]">Marketplace</div>
            </div>

            <div className="page-item flex items-center justify-center w-[75%] h-[7vh]">
              {/* search icon */}
              <MdOutlineDateRange style={{ top: "5px", fontSize: "27px", paddingLeft: "5px", color: "#2b86fe" }} />
              {/* input tag */}
              <div className="pages-item cursor-pointer w-full h-full flex items-center
              pl-2 rounded-md  text-[#bdc9d8] text-[15px] hover:text-[#2b86fe]">Events</div>
            </div>


            <div className="page-item flex items-center justify-center w-[75%] h-[7vh] pl-[1.5px]">
              {/* search icon */}
              <IoNewspaperOutline style={{ top: "5px", fontSize: "27px", paddingLeft: "5px", color: "#2b86fe" }} />
              {/* input tag */}
              <div className="pages-item cursor-pointer w-full h-full flex items-center
              pl-2 rounded-md  text-[#bdc9d8] text-[15px] hover:text-[#2b86fe]">News feed</div>
            </div>

            {/* bottom-border */}
            <div className="bottom-border bg-[#aab5cb2c] w-[75%] border-[1px] opacity-[0.2] rounded-[15px] mt-[10px]"></div>
          </div>

        </div>

        {/* Followers sections */}
        <FollowersCard />
        <FollowersCard />

      </div>

      {/* Right side bar (Where we show that content , navbar , right content bar) */}
      <div className="main-right border-l-2 border-[#383636d1] w-[80%] h-max ">

        {/* navbar */}
        <Navbar />

        {/* content part */}
        <div className="main-r-bottom h-[90%] w-full bg-[#1f1e1e] flex">

          {/* Containt container part */}
          <div className="main-rb-left w-[73%] h-full flex flex-col items-center ">

            {/* search section with profile */}
            <PostCard />

            {/* topic feed when user upload a post */}
            <div className="friend-container border-[1px] border-neutral-500 bg-[#38363634] w-[85%] h-max mt-8 mb-4 pt-4 rounded-tr-lg rounded-tl-lg">

              {/* user pic , title , bookmark ,list*/}
              <div className="search-div-conrainer flex items-center justify-between mb-4 px-4 ">

                <div className="profile-pic-name flex items-center">
                  <ProfilePic />
                  <div className="title-time">
                    <h3 className='text-white ml-4'>Kevin smasher</h3>
                    <h3 className='text-white ml-4 text-[10px]'>@ 12 minutes ago</h3>
                  </div>
                </div>

                <div className="bookmark-list flex items-center">
                  <IoBookmarkOutline style={{ marginLeft: "20px", color: "white" }} className='bookmark cursor-pointer' />
                  <PiDotsThreeOutlineVerticalFill style={{ marginLeft: "20px", color: "white" }} className='list cursor-pointer' />
                </div>

              </div>

              {/* Description of post */}
              <div className="post-description flex items-center justify-between mb-4 px-4 ">
                <p className='text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptatibus molestias voluptates eum neque sequi iure qui expedita beatae.</p>
              </div>

              {/* Upload picture */}
              <div className="uploaded-picture flex items-center justify-center w-full h-[65vh] ">
                <img src={Cat} alt="" className='w-full h-full' />
              </div>

              {/* like comment share */}
              <div className="like-comment-share flex items-center justify-between w-full h-max border-b-[1px] border-neutral-500 ">
                <div className="like flex items-center p-4 w-max cursor-pointer">
                  <BiLike style={{ color: "white", fontSize: "20px" }} />
                  <h4 className='px-2 text-white'>Like</h4>
                  <h4 className='px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2' >1.4k</h4>
                </div>
                <div className="comment flex items-center p-4 w-max cursor-pointer">
                  <BiCommentDetail style={{ color: "white", fontSize: "20px" }} />
                  <h4 className='px-2 text-white'>comments</h4>
                  <h4 className='px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2' >545</h4>
                </div>
                <div className="share flex items-center p-4 w-max cursor-pointer">
                  <PiShareBold style={{ color: "white", fontSize: "20px" }} />
                  <h4 className='px-2 text-white'>share</h4>
                  <h4 className='px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2'>100</h4>
                </div>
              </div>

              <ProfileWithSearch props={{placeholder : "write your comments..."}} />

            </div>

          </div>

          {/* content right bar */}
          <div className="main-rb-right w-[27%] h-full flex flex-col">
            {/* Friends sections */}
            <FriendsCard />
            <FriendsCard />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Landing;