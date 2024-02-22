import { useState } from "react";
import { GoHomeFill } from "react-icons/go";

const HomeIcon:React.FC<any> = ({ item }) => {
//   const [iconSize, setIconSize] = useState(item.fontSize);
//   const [textSize, setTextSize] = useState(item.textSize);
//   const [width, setWidth] = useState(item.width);
//   const [paddingLeft, setPaddingLeft] = useState(item.paddingLeft);
//   const [marginLeft, setMarginLeft] = useState(item.marginLeft);
//   const [iconColor, setIconColor] = useState(item.iconColor);

  return (
    <div
      className="page-item flex items-center justify-center h-[7vh] "
      style={{ width: item.width, marginLeft: item.marginLeft }}>
      {/* Home icon */}
      <GoHomeFill
        style={{ top: "5px", paddingLeft: item.paddingLeft, color: item.iconColor }}
        size={item.fontSize}
      />
      {/* input tag */}
      <div
        className="pages-item cursor-pointer w-full h-full flex items-center
            pl-2 rounded-md  text-[#bdc9d8] hover:text-[#2b86fe]"
        style={{ fontSize: item.textSize }}>
        Home
      </div>
    </div>
  );
};

export default HomeIcon;
