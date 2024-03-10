import PostCard from "./PostCard";
import ProfilePic from "./ProfilePic";
import Cat from "../assets/Icons/cat.jpg";

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
import ProfileWithSearch from "./ProfileWithSearch";

const Feed = () => {
  return (
    <>
      <div className="friend-container border-[1px] border-neutral-500 bg-[#38363634] w-[85%] h-max mt-8 mb-4 pt-4 rounded-tr-lg rounded-tl-lg">
        {/* user pic , title , bookmark ,list*/}
        <div className="search-div-conrainer flex items-center justify-between mb-4 px-4 ">
          <div className="profile-pic-name flex items-center">
            <ProfilePic />
            <div className="title-time">
              <h3 className="text-white ml-4">Kevin smasher</h3>
              <h3 className="text-white ml-4 text-[10px]">@ 12 minutes ago</h3>
            </div>
          </div>

          <div className="bookmark-list flex items-center">
            <IoBookmarkOutline
              style={{ marginLeft: "20px", color: "white" }}
              className="bookmark cursor-pointer"
            />
            <PiDotsThreeOutlineVerticalFill
              style={{ marginLeft: "20px", color: "white" }}
              className="list cursor-pointer"
            />
          </div>
        </div>

        <div className="post-description flex items-center justify-between mb-4 px-4 ">
          <p className="text-[15px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            odit voluptatibus molestias voluptates eum neque sequi iure qui
            expedita beatae.
          </p>
        </div>

        {/* Upload picture */}
        <div className="uploaded-picture flex items-center justify-center w-full h-[65vh] ">
          <img src={Cat} alt="" className="w-full h-full" />
        </div>

        {/* like comment share */}
        <div className="like-comment-share flex items-center justify-between w-full h-max border-b-[1px] border-neutral-500 ">
          <div className="like flex items-center p-4 w-max cursor-pointer">
            <BiLike style={{ color: "white", fontSize: "20px" }} />
            <h4 className="px-2 text-white">Like</h4>
            <h4 className="px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2">
              1.4k
            </h4>
          </div>
          <div className="comment flex items-center p-4 w-max cursor-pointer">
            <BiCommentDetail style={{ color: "white", fontSize: "20px" }} />
            <h4 className="px-2 text-white">comments</h4>
            <h4 className="px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2">
              545
            </h4>
          </div>
          <div className="share flex items-center p-4 w-max cursor-pointer">
            <PiShareBold style={{ color: "white", fontSize: "20px" }} />
            <h4 className="px-2 text-white">share</h4>
            <h4 className="px-2 text-white w-max flex items-center justify-center rounded-[15px] h-[3vh] bg-[#404143] p-2">
              100
            </h4>
          </div>
        </div>

        {/* Profile with search component */}
        <ProfileWithSearch props={{ placeholder: "write your comments..." }} />
      </div>
    </>
  );
};

export default Feed;
