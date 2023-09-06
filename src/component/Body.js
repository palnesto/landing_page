import React from "react";

const Body = () => {
  return (
    <div
      className="w-screen"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>
        {`
          @media (min-width: 1024px) {
            .w-screen {
              background-image: url('/banner.png');
            }
          }
          @media (max-width: 1023px) {
            .w-screen {
              background-image: url('/banners.png');
              
            }
          }
        `}
      </style>
      <div className="flex flex-col justify-center items-center w-100">
        <div className="mt-20">
          <img src="./logo.png" alt="logo" />
        </div>
        <p className="text-white font-Poppins text-base font-bold leading-9 text-center mt-10">
          GET YOUR ONLINE ID IN 5MINS
        </p>
       <div className="animate-blink">
          <a href="https://api.whatsapp.com/send?phone=+918297855853&text=Hello+I+want+a+ID+">
            <img src="./Whatsapp.png" alt="WhatsApp logo" />
          </a>
        </div>
        <div className="lg:flex flex-row mb-3">
          <img src="./groupLogo.png" alt="logo" />
          <img src="./Groups.png" alt="logo" />
          <img src="./Grouped.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          {/* <p className="lg:leading-9 text-5xl lg:text-8xl text-[#FFFFFF] mt-12 font-extrabold font-Poppins">
            TRUSTED{" "}
            <span className="text-5xl leading-tight lg:text-8xl text-[#F83A40] mt-10 font-extrabold font-Poppins">
              ONLINE <br /> CRICKET SITE
            </span>
          </p> */}
        </div>
        <div className="xl:mx-[10rem] lg:mt-16 mx-5 mt-52">
          <p className="w-100 my-20 font-poppins text-white text-center text-sm lg:text-base font-bold">
            India's no. 1 online sports games promoter. Get your ID within 2
            minutes! Join Most Trusted, Secure & Fastest Book of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
