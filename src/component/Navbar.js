import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[#F83A40] p-1 flex flex-row justify-between items-center md:text-md md:font-semibold xl:text-lg xl:font-bold text-white">
      <p className="mx-5 lg:mx-10">Get trusted online ID here</p>

      {/* Hamburger/Cross Icon for Mobile */}
      <div
        className="lg:hidden mx-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </div>

      {/* Navigation Menu */}
      <div
        className={`fixed inset-0 lg:top-0 top-10 z-50 transition-transform transform ${
          !isMenuOpen ? "translate-x-full" : "translate-x-0"
        } lg:translate-x-0 lg:static lg:bg-transparent`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-between bg-white  text-[#F83A40] font-bold lg:text-white lg:bg-[#F83A40] space-y-10 lg:space-y-0 lg:space-x-5 p-10 lg:p-0">
          <li className="mx-3 lg:mx-5 text-2xl lg:text-[1.125rem]">
            <a href="#home">Home</a>
          </li>
          <li className="mx-3 lg:mx-5 text-2xl lg:text-[1.125rem]">
            <a href="#Contact Us">Contact Us</a>
          </li>
          <li className="mx-3 lg:mx-5 text-2xl lg:text-[1.125rem]">
            <a href="#Privacy Policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
