import React from "react";
import { AiFillFacebook } from "react-icons/ai";
const Follow = () => {
  return (
    <div className="text-center lg:text-left">
      <p className="text-[#ABABAB] font-Poppins font-medium text-sm leading-6 my-5">
        Follow us on
      </p>
      <div className="flex items-center justify-center lg:justify-start">
        <div>
          <img src="/instagram.png" alt="instagram" className="mr-4" />
        </div>
        <div>
          <AiFillFacebook size={35} color="#3D5A98" />
        </div>
        <div>
          <img src="/twitter.png" alt="twitter" className="ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
