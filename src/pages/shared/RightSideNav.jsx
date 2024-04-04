
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login with</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle/> Login with google
</button>
            <button className="btn btn-outline w-full">
            <FaGithub/> Login with Github
</button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl">Find us on</h2>
                <a className="flex  items-center p-4 border rounded-t-lg text-lg " href="">
                    
                    <FaFacebookF className="mr-3  "/>Facebook
                </a>
                <a className="flex  items-center p-4 border  text-lg" href="">
                    <FaTwitter className="mr-3"/>Facebook
                </a>
                <a className="flex  items-center p-4 border rounded-b-lg text-lg" href="">
                    <FaInstagram className="mr-3"/>Facebook
                </a>
            </div>

            {/* Q zone */}

            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-2xl">Q zone</h2>
                <div className="bg-[#F3F3F3] px-4 pt-10 pb-6">
                <img className="w-full " src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

                </div>
            </div>
        </div>
    );
};

export default RightSideNav;