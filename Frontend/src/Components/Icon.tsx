import { Icontype } from "./IconType";

const Icon = ({title,top,fontSize,paddingLeft,color,icon}:Icontype) => {

  // Icon component first latter always need to Capital latter
  const Icon = icon;

  return (
    <div className="page-item flex items-center justify-center w-[75%] h-[7vh]">
      {/* search icon */}
      <Icon style={{
          top: top,
          fontSize:fontSize,
          paddingLeft: paddingLeft,
          color: color
        }}/>

      {/* input tag */}
      <div
        className="pages-item cursor-pointer w-full h-full flex items-center
    pl-2 rounded-md  text-[#bdc9d8] text-[15px] hover:text-[#2b86fe]"
    style={title === "Home" ? {fontSize:"30px"} : {fontSize:"16px"}}
      >
        {title}
      </div>
    </div>
  );
};

export default Icon;
