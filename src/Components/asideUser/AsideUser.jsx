import { AiOutlineClose as Close } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { AiOutlineCheck as Check } from "react-icons/ai";
import { CgSandClock as Clock } from "react-icons/cg";
import { SiAirbnb as AirBnb } from "react-icons/si";
import { BsArrowRightShort as Arrow } from "react-icons/bs";

import PhotoUser from "../../assets/img/photo/photo1.png";
const AsideUser = () => {
  return (
    <>
      <aside className="fixed hidden w-[460px] z-10 bg-[#151515] h-[100%] right-0 overflow-auto">
        <div className="flex justify-between m-6 ">
          <h2 className="font-semibold text-xl">Candidate Details</h2>
          <Close className="bg-[#1E1E1E] fill-[#FFFFFF] rounded-3xl w-6 h-6 p-1" />
        </div>
        <div className="bg-[#1E1E1E] m-6 flex flex-col items-center p-4 rounded-xl">
          <img className="mr-3 w-14" src={PhotoUser} alt="#" />
          <h2 className="font-semibold text-[#FFFFFF] text-base">
            Malaika Brown
          </h2>
          <p className="text-[#898989] text-sm">Sr. UX Designer</p>
          <div className="flex justify-between mt-11 w-[100%]">
            <ul className="flex items-center">
              <li className="mr-2 ml-2">
                <Email className="bg-[#262626] fill-[#898989] rounded-3xl w-7 h-7 p-1" />
              </li>
              <li>
                <p className="text-[#898989] text-xs ">EMAIL</p>
                <p className="text-[#FFFFFF] text-sm">malaika.br@gmail.com</p>
              </li>
            </ul>
            <ul className="flex items-center">
              <li className="mr-2 ml-2">
                <Phone className="bg-[#262626] fill-[#898989] rounded-3xl w-7 h-7 p-1" />
              </li>
              <li>
                <p className="text-[#898989] text-xs ">PHONE NUMBER</p>
                <p className="text-[#FFFFFF] text-sm">+11 5423-6548</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#1E1E1E] m-6 flex flex-col p-4 rounded-xl">
          <h2 className="font-semibold text-xl">Application Details</h2>
          <section className="mt-6">
            <ul className="w-full">
              <li className="flex items-center mb-6 w-full">
                <Check className="bg-[#00B85E] rounded-3xl w-7 h-7 p-1 mr-3" />
                <ul className="relative w-full">
                  <li className="text-[#FFFFFF] font-semibold">Screening</li>
                  <li className="text-[#898989] text-xs">March 20. 2023</li>
                </ul>
              </li>
              <li className="flex items-center mb-6 w-full">
                <Clock className="bg-[#EAB04D] rounded-3xl w-7 h-7 p-1 mr-3" />
                <ul className="relative w-full">
                  <li className="text-[#FFFFFF] font-semibold">
                    Desing Challenge
                  </li>
                  <li className="text-[#898989] text-xs">March 22. 2023</li>
                  <li className="absolute bg-[#eab04d2f] rounded-xl px-2 py-1 flex items-center right-0 top-2">
                    <span className="text-[#EAB04D] text-xs">Under Review</span>
                  </li>
                </ul>
              </li>
              <li className="flex items-center mb-6 w-full">
                <p className="bg-[#262626] text-[#898989] font-semibold text-center flex justify-center content-center rounded-3xl w-7 h-7 p-1 mr-3">
                  3
                </p>
                <ul className="relative w-full">
                  <li className="text-[#898989] font-semibold">Interview</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        <div className="bg-[#1E1E1E] m-6 flex flex-col p-4 rounded-xl">
          <h2 className="font-semibold text-xl">Experience</h2>
          <div className="mt-6 flex flex-wrap justify-between">
            <ul className="flex">
              <li className="mr-2">
                <AirBnb className="fill-[#FF5A5F] w-6 h-6" />
              </li>
              <li className="text-[#FFFFFF] font-semibold">AirBnb</li>
            </ul>
            <p className="text-[#898989] text-xs">Oct ‘20 - Present</p>
            <p className="w-full text-[#B8B8B8] mt-4 text-sm">
              Led the redesign of the booking process for Airbnbs mobile app,
              resulting in a 30% increase in conversion rates and improved user
              satisfaction.
            </p>
          </div>
          <button className="w-full flex justify-center text-center px-6 py-4 mt-6 text-[#FFFFFF] bg-gradient-to-r from-purple-700 to-orange-600 font-semibold">
            Move to Next Step <Arrow className="w-7 h-7" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default AsideUser;
