import React from "react";
import Buttons from "./Button";

const Body = () => {
  return (
    <div
      className="w-screen"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex flex-col justify-center items-center w-100">
        <div className="mt-20">
          <img src="./logo.png" alt="logo" />
        </div>
        <p className="text-white font-Poppins text-base font-bold leading-9 text-center mt-10">
          GET YOUR ONLINE ID IN 5MINS
        </p>

        <a
          href="//api.whatsapp.com/send?phone=919700739627&text=Hi, i would like to make a request"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10"
        >
          <Buttons text="WHATSAPP NOW" />
        </a>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="lg:leading-9 text-5xl lg:text-8xl text-[#FFFFFF] mt-12 font-extrabold font-Poppins">
            TRUSTED{" "}
            <span className="text-5xl leading-tight lg:text-8xl text-[#F83A40] mt-10 font-extrabold font-Poppins">
              ONLINE <br /> CRICKET SITE
            </span>
          </p>
        </div>
        <div className="xl:mx-[10rem] lg:mt-16 mx-5">
          <p className="w-100 my-20 font-poppins text-white text-center text-2xl font-bold ">
            India's no. 1 online sports games promoter. Get your ID within 2
            minutes! Join Most Trusted, Secure & Fastest Book of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
