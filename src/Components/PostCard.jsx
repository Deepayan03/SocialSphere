
import ProfileWithSearch from "./ProfileWithSearch";
import PostWithIcon from "./PostWithIcon";

const PostCard = () => {
    return (
        <>
            <div className="friend-container border-[1px] border-neutral-500 bg-[#38363634] w-[85%] h-max mt-8  rounded-lg">

                {/* above part search section */}
                <ProfileWithSearch props={{ placeholder: "whats in your minds..." }} />
                {/* above part icon and button section */}
                <PostWithIcon />

            </div>
        </>
    )
}

export default PostCard