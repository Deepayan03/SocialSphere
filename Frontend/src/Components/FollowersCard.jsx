
import Followers from "./Followers";

const FollowersCard = () => {
    return (
        <>
            <div className="community-div w-full h-max flex pl-8 mt-4 items-center">

                <div className="community-wrapper w-full h-full ">

                    {/* community title */}
                    <h1 className='mycom-title w-full h-[5vh] flex justify-between items-center font-bold text-[#aab5cb] text-[20px]'>My Community <span className='status bg-[#343943] text-[#aab5cb] rounded-[20px] w-[6vh] h-[60%] text-[15px] flex justify-center items-center p-3 mr-8'>120</span></h1>

                    {/* =================followers details============= */}
                    <Followers />
                    <Followers />
                    <Followers />
                    {/* ============================== */}

                    {/* bottom-border */}
                    <div className="bottom-border bg-[#aab5cb2c] w-[75%] border-[1px] opacity-[0.2] rounded-[15px] mt-[10px]"></div>

                </div>

            </div>

        </>
    )
}

export default FollowersCard;