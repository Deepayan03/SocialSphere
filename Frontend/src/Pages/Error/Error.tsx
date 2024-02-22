
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="Error-body w-screen h-screen bg-[#1f1e1e] flex justify-center items-center flex-col">
                <div className='error-title text-white text-8xl'>OOPS! Wrong page</div>
                <NavLink to="/" className={()=>("bg-white p-4 rounded-[5vh] mt-[2vh] text-2xl font-bold")}>Go to Home</NavLink>
            </div>
        </>

    )
}

export default Error