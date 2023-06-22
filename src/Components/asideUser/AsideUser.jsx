import { AiOutlineClose as Close } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { AiOutlineCheck as Check } from "react-icons/ai";
import { CgSandClock as Clock } from "react-icons/cg";
import { SiAirbnb as AirBnb } from "react-icons/si";
import { BsArrowRightShort as Arrow } from "react-icons/bs";
//import PhotoUser from "../../assets/img/photo/photo1.png";

import axios from "axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
const AsideUser = ({ idCandidate }) => {
  const [candidateDetail, setCandidateDetail] = useState([]);
  let id = idCandidate;
  //console.log(id);
  useEffect(() => {
    if (id) {
      getCandidateDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function hiddeCandidateDetails() {
    const menuCandidate = document.getElementById("candidateDetails");
    const bgAside = document.getElementById("bg-aside");
    menuCandidate.style.display = "none";
    bgAside.style.display = "none";
  }

  function getCandidateDetails() {
    axios
      .get(
        `http://localhost/api/dashboard-react/candidatesDetails.php?id=${idCandidate}`
      )
      .then(function (response) {
        //console.log(response.data);
        setCandidateDetail(response.data);
      });
  }

  const dataCandidate = candidateDetail.map((data, key) => {
    return (
      <>
        <div
          key={key}
          className="bg-[#1E1E1E] m-6 flex flex-col items-center p-4 rounded-xl"
        >
          <img
            className="mr-3 w-14 h-14 rounded-full"
            src={`/img/photo/${data.photo_candidate}`}
            alt="#"
          />
          <h2 className="font-semibold text-[#FFFFFF] text-base">
            {data.name} {data.last_name}
          </h2>
          <p className="text-[#898989] text-sm">{data.profession}</p>
          <div className="flex justify-between mt-11 w-[100%]">
            <ul className="flex items-center">
              <li className="mr-2 ml-2">
                <Email className="bg-[#262626] fill-[#898989] rounded-3xl w-7 h-7 p-1" />
              </li>
              <li>
                <p className="text-[#898989] text-xs ">EMAIL</p>
                <p className="text-[#FFFFFF] text-sm">{data.email}</p>
              </li>
            </ul>
            <ul className="flex items-center">
              <li className="mr-2 ml-2">
                <Phone className="bg-[#262626] fill-[#898989] rounded-3xl w-7 h-7 p-1" />
              </li>
              <li>
                <p className="text-[#898989] text-xs ">PHONE NUMBER</p>
                <p className="text-[#FFFFFF] text-sm">{data.number_phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  });

  const experienceCandidate = candidateDetail.map((data, key) => {
    return (
      <>
        <div
          key={key}
          className="bg-[#1E1E1E] m-6 flex flex-col p-4 rounded-xl"
        >
          <h2 className="font-semibold text-xl">Experience</h2>
          <div className="mt-6 flex flex-wrap justify-between">
            <ul className="flex">
              <li className="mr-2">
                <AirBnb className="fill-[#FF5A5F] w-6 h-6" />
              </li>
              <li className="text-[#FFFFFF] font-semibold">{data.company}</li>
            </ul>
            <p className="text-[#898989] text-xs">
              {data.initial_date} - {data.final_date}
            </p>
            <p className="w-full text-[#B8B8B8] mt-4 text-sm">
              {data.description}
            </p>
          </div>
          <button className="w-full flex justify-center text-center px-6 py-4 mt-6 text-[#FFFFFF] bg-gradient-to-r from-purple-700 to-orange-600 font-semibold">
            Move to Next Step <Arrow className="w-7 h-7" />
          </button>
        </div>
      </>
    );
  });

  return (
    <>
      <div
        id="bg-aside"
        className="bg-[#1e1e1e7a] fixed hidden w-[100%] h-[100%] z-10 top-0 left-0 cursor-pointer"
        onClick={hiddeCandidateDetails}
      ></div>
      <aside
        id="candidateDetails"
        className="fixed hidden w-[460px] z-20 bg-[#151515] h-[100%] right-0 top-0 overflow-auto"
      >
        <div className="flex justify-between m-6 ">
          <h2 className="font-semibold text-xl">Candidate Details</h2>
          <Close
            onClick={hiddeCandidateDetails}
            className="cursor-pointer bg-[#1E1E1E] fill-[#FFFFFF] rounded-3xl w-6 h-6 p-1"
          />
        </div>
        {dataCandidate}
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
        {experienceCandidate}
      </aside>
    </>
  );
};

export default AsideUser;
