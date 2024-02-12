
import Cat from '../assets/Icons/cat.jpg';

const ProfilePic = () => {
  return (
    <div className="user-profile-pic border-[1px] cursor-pointer border-[#504d4dd1] w-[6vh] h-[6vh] rounded-[50%]">
    <img src={Cat} alt="" className='w-[6vh] h-[6vh] rounded-[50%]'/>
    </div>
  )
}

export default ProfilePic;

