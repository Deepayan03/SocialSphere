import { IoIosArrowDown } from "react-icons/io";
import Friends from "./Friends";

const FriendsCard = () => {
  interface Friend {
    name: string;
    lastActive: string;
  }
  const dummyFriendDetails: Friend[] = [
    {
      name: "Deepayan Mukhopadhyay",
      lastActive: "2 hours",
    },
    {
      name: "Deep Roy",
      lastActive: "2 hours",
    },
  ];
  return (
    <>
      <div className="friend-container border-[1px] border-neutral-500 bg-[#38363634] w-max h-max my-8 p-2 rounded-lg">
        <div className="Ftitle text-white flex items-center justify-between w-full h-[25px]">
          <p className="">Friend List</p>
          <IoIosArrowDown />
        </div>

        {/* friends details */}
        {dummyFriendDetails.map((detail, i) => (
          <Friends details={detail} key={i} />
        ))}
      </div>
    </>
  );
};

export default FriendsCard;
