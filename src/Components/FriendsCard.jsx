
import { IoIosArrowDown } from "react-icons/io";
import Friends from "./Friends";

const FriendsCard = () => {
    return (
        <>
            <div className="friend-container border-[1px] border-neutral-500 bg-[#38363634] w-max h-max my-8 p-2 rounded-lg">

                <div className="Ftitle text-white flex items-center justify-between w-full h-[25px]">
                    <p className=''>Friend List</p>
                    <IoIosArrowDown />
                </div>

                {/* friends details */}
                <Friends />
                <Friends />
                <Friends />
            </div>
            
        </>
    )
}

export default FriendsCard;