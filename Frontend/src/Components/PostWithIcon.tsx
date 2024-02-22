import { IoCameraOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { GrAttachment } from "react-icons/gr";
import { LuMapPin } from "react-icons/lu";
import { FaRegSmileWink } from "react-icons/fa";
import { PiPencilSimpleLineBold } from "react-icons/pi";

const PostWithIcon = () => {
  return (
    <>
      <div className="icon-din-container  mt-2 flex justify-between items-center pb-4 mx-4">
        <div className="idleft flex items-center ">
          <IoCameraOutline
            style={{ color: "white", fontSize: "25px", marginRight: "20px" }}
          />
          <GrGallery
            style={{ color: "white", fontSize: "20px", marginRight: "20px" }}
          />
          <GrAttachment
            style={{ color: "white", fontSize: "20px", marginRight: "20px" }}
          />
          <LuMapPin
            style={{ color: "white", fontSize: "20px", marginRight: "20px" }}
          />
          <FaRegSmileWink
            style={{ color: "white", fontSize: "20px", marginRight: "20px" }}
          />
        </div>

        <div className="idright flex items-center">
          <button className="flex items-center text-white ml-4 px-4 py-2 rounded-[15px]">
            <PiPencilSimpleLineBold style={{ color: "White" }} /> draft
          </button>
          <button className="flex items-center text-white ml-4 px-4 py-2  rounded-[15px]">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostWithIcon;
