import React from "react";
import Follow from "./Follow";
import Buttons from "./Button";

const Bottom = () => {
  return (
    <div className="m-10 lg:m-16">
      <div
        style={{ boxShadow: "2px 4px 20px 10px #0000000D" }}
        className="p-7 lg:p-10 rounded-3xl text-center lg:text-left"
      >
        <p className="mb-5 font-Poppins text-lg lg:text-base font-bold leading-9">
          WELCOME IN THE FAMILY OF BetEx247 - OLDEST FANTASY SPORTS PROVIDER
        </p>
        <Buttons text="GET YOUR ID NOW" />
        <p className="mt-5 font-poppins text-lg font-medium leading-8">
          Get in touch with BetEx247 for any Queries, Emergencies, Feedback, or
          Complaints. We are here to help you 24*7 with our services on
          WhatsApp.
          <br />
          Welcome to BetEx247, we offer you a genuinely unique fantasy sports
          experience. Besides, We have a global network and provide the best
          industry experience with a single click.
          <br />
        </p>
        <p className="font-poppins text-lg font-medium leading-8 mt-5 lg:mt-0">
          BetEx247 is a responsible fantasy sports promoter. We deal in all
          kinds of fantasy sports games. We have helped 50000+ players to find
          the best fantasy sports online. Our Company Works In A Very
          Transparent Way. Get Your Demo ID Now
        </p>
        <p className="font-Poppins text-lg font-bold leading-10 mt-5">
          WHY CHOOSE US
        </p>
        <ul
          style={{ color: "red" }}
          className="list-none lg:list-disc font-poppins text-sm font-medium leading-7 list-inside"
        >
          <li className="my-10" style={{ color: "red" }}>
            <span className="text-black text-lg">24x7 Support</span>
          </li>
          <li className="my-10">
            <span className="text-black text-lg">Instant Reply</span>
          </li>
          <li className="my-10">
            <span className="text-black text-lg">
              Most trusted secured platform
            </span>
          </li>
          <li className="my-10">
            <span className="text-black text-lg">10 Lac+ Active Users</span>
          </li>
          <li className="my-10">
            <span className="text-black text-lg">250+ Branches</span>
          </li>
          <li className="my-10">
            <span className="text-black text-lg ">Working Since 2010</span>
          </li>
        </ul>
        <Follow />
      </div>
    </div>
  );
};

export default Bottom;
