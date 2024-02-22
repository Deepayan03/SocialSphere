const Friends: React.FC<any> = ({ details }) => {
  return (
    <>
      <div className="Fitem text-white my-4 rounded-[5px] px-[5px] flex items-center justify-between w-full h-max">
        <div className="fd w-max mr-4">
          <h3 className="text-[14px]">{details.name}</h3>
          <h4 className="text-[13px] text-slate-300">
            Last active {details.lastActive}
          </h4>
        </div>
        <div className="fnotify text-[10px] p-[5px] w-max flex rounded-[15px] bg-[#3d3e3f]">
          11 in last
        </div>
      </div>
    </>
  );
};

export default Friends;
