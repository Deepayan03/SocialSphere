/* eslint-disable no-unused-vars */

import "./Landing.css";
import Cat from "../../assets/Ibar cons/cat.jpg";
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

import ProfilePic from "../../Components/ProfilePic";
import PostCard from "../../Components/PostCard";
import ProfileWithSearch from "../../Components/ProfileWithSearch";
import FollowersCard from "../../Components/FollowersCard";
import Navbar from "../../Components/Navbar";
import FriendsCard from "../../Components/FriendsCard";
import Feed from "../../Components/Feed";
import SocialSphere from "../../Components/SocialSphere";
import SearchSection from "../../Components/SearchSection";
import { IconBaseProps, IconType } from "react-icons";
import { ComponentType } from "react";
import Icon from "../../Components/Icon";
import { GoHomeFill } from "react-icons/go";

export type followerType = {
  caption:string,
  totalMembers:string,
}

const Followporps :followerType = {
  caption:"My community",
  totalMembers:"556",
}

const Landing = () => {
  return (
    <div className="main-wrapper bg-[#000000d6] w-screen h-max flex">
      {/* Left side bar */}
      <div className="main-left w-[20%] h-max ">
        {/* left bar icon section. Socila Sphere Component */}
        <SocialSphere />

        {/*Left bar search Section  */}
        <SearchSection />

        {/* Pages section */}
        <div className="pages-div w-full h-maxflex items-center">
          {/* wrapper in which all pages exists */}
          <div className="pages-wrapper w-full h-full pl-8">
            {/* home icon */}
            <Icon
              top="5px"
              fontSize="27px"
              paddingLeft="5px"
              color="#2b86fe"
              title="Welcome"
              icon={GoHomeFill}
            />

            {/* Community Icon */}
            <Icon
              top="5px"
              fontSize="27px"
              paddingLeft="5px"
              color="#2b86fe"
              title="Community"
              icon={PiUsersFour}
            />

            {/* Market icon */}
            <Icon
              top="5px"
              fontSize="27px"
              paddingLeft="5px"
              color="#2b86fe"
              title="Market"
              icon={PiBag}
            />

            {/* Event icon */}
            <Icon
              top="5px"
              fontSize="27px"
              paddingLeft="5px"
              color="#2b86fe"
              title="Events"
              icon={MdOutlineDateRange}
            />

            {/* bottom-border */}
            <div className="bottom-border bg-[#aab5cb2c] w-[75%] border-[1px] opacity-[0.2] rounded-[15px] mt-[10px]"></div>
          </div>
          
        </div>
        

        {/* Followers sections */}
        <FollowersCard props={Followporps}/>
        {/* <FollowersCard /> */}
      </div>

      {/* Right side bar (Where we show that content , navbar , right content bar) */}
      <div className="main-right border-l-2 border-[#383636d1] w-[80%] h-max ">
        {/* navbar */}
        <Navbar />

        {/* content part*/}
        <div className="main-r-bottom h-[90%] w-full bg-[#1f1e1e] flex">
          {/* Containt feed and search part */}

          <div className="main-rb-left  w-[73%] h-full flex flex-col items-center ">
            {/* search section with profile */}
            <PostCard />

            {/* Feed component. Mane ekta holo puro container somet upload data. */}
            <Feed />
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
  );
};

export default Landing;
