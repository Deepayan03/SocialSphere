import { IoIosSearch } from "react-icons/io";

const SearchSection = () => {
  return (
    <div className="search-div w-full h-[10%] flex pt-4 mb-4 items-center pl-8 ">
      <div className="search-icon relative w-[75%] h-[5vh]">
        {/* search icon */}
        <IoIosSearch
          style={{
            top: "5px",
            position: "absolute",
            fontSize: "27px",
            paddingLeft: "5px",
            color: "#464c58"
          }}
        />
        {/* input tag */}
        <input
          type="text"
          id="searchItem"
          placeholder="Explore Heroine"
          className="search-item border-y-[2px] bg-[#25262cc4] border-x-[#343943] border-y-[#343943] border-x-[2px] w-full h-full rounded-[10px] pl-8 text-white text-[15px]"
        />
      </div>
    </div>
  );
};

export default SearchSection;
