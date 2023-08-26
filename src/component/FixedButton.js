import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const FixedButton = () => {
  return (
    <a
      href="https://w.app/bytex247"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="bg-[#23d366] flex items-center rounded-lg fixed left-5 bottom-5  px-4 py-1">
        <BsWhatsapp size={25} color="white" />
        <button className="m-2 font-bold text-lg text-white">
          Click Here to Get Id
        </button>
      </div>
    </a>
  );
};

export default FixedButton;
