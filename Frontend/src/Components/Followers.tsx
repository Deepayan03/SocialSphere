

type Followers = {
  followProp:{
    title:string,
    members:string
  }
}


const Followers = ({followProp} : Followers) => {
  return (
    <>
      <div className="communites w-[75%] h-max flex items-center px-4 py-2 hover:bg-[#2b86fe] rounded-[20px] ">
        <div className="community-icon w-[6vh] h-[6vh] rounded-[50%] mr-4  "></div>
        <div className="community-details w-max">
          <h3 className="cDetails text-[12px] font-bold text-white">
            {followProp.title}
          </h3>
          <h5 className="cDetails text-[11px] text-white">{followProp.members} members</h5>
        </div>
      </div>
    </>
  );
};

export default Followers;
