/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { GoHomeFill } from "react-icons/go";

const HomeIcon = ({item}) => {

    // In this section some warning shows but that does not has any errors
    const [iconSize , setIconSize] = useState(item.fontSize);
    const [textSize , setTextSize] = useState(item.textSize);
    const [width , setWidth] = useState(item.width);
    const [paddingLeft,setPaddingLeft] = useState(item.paddingLeft);
    const [marginLeft,setMarginLeft] = useState(item.marginLeft);
    const [iconColor,setIconColor] = useState(item.iconColor);

    return (
        <div className="page-item flex items-center justify-center h-[7vh] " style={{width:width,marginLeft:marginLeft}}>
            {/* Home icon */}
            <GoHomeFill style={{ top: "5px",paddingLeft:paddingLeft, color:iconColor }} size={iconSize} />
            {/* input tag */}
            <div className="pages-item cursor-pointer w-full h-full flex items-center
            pl-2 rounded-md  text-[#bdc9d8] hover:text-[#2b86fe]" style={{fontSize:textSize}} >Home</div>
        </div>

    )
}

export default HomeIcon;