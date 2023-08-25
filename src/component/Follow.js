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
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
            <img src="/instagram.png" alt="instagram" className="mr-4" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            <AiFillFacebook size={35} color="#3D5A98" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
            <img src="/twitter.png" alt="twitter" className="ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Follow;
