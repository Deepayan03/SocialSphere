// To be refactored -------------
import ProfilePic from "./ProfilePic";

const ProfileWithSearch:React.FC<any>= ({ props }) => {
  return (
    <>
      {/* above part search section */}
      <div className="search-div-conrainer flex mx-4 py-4 ">
        <ProfilePic />
        <input
          type="text"
          id="user-search"
          placeholder={props.placeholder}
          className="border-neutral-500 bg-[#383636ca] rounded-[15px] w-[90%] ml-4 pl-4 text-white"
        />
      </div>
    </>
  );
};

export default ProfileWithSearch;
