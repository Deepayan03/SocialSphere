import ProfilePic from "./ProfilePic";
import { BiLike } from "react-icons/bi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Comments = () => {



    return (

        <>
            <div className="search-div-conrainer flex mx-4 py-4 w-90">
                <ProfilePic />
                <div className="search-div-conrainer flex flex-col mx-1 py-2 ">
                    <h5 className="font-bold ml-2 text-white mb-1">Layada</h5>

                    <p className="border-neutral-500 bg-[#383636ca] rounded-[15px] ml-2 py-5 px-10 text-white" >
                        Hi bokacho*****

                    </p>
                    <div className="p-2 flex flex-row gap-3 ml-2 items-center justify-center">
                        <div className="flex flex-row">
                            <BiLike className="cursor-pointer" style={{ color: "white", fontSize: "20px" }} />
                            <h4 className="px-2 text-white cursor-pointer">Like</h4>
                            <h4 className="px-1  text-white w-max flex items-center justify-center rounded-[15px] bg-[#404143]">
                                1.4k
                            </h4>
                        </div>
                        <p className="text-white cursor-pointer">Reply</p>
                        <p className="text-white cursor-pointer">Edit</p>
                        <p className="text-white cursor-pointer">Delete</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Comments;