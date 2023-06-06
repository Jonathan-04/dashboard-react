import { BsArrowUpRight } from "react-icons/bs";
import { GoLocation as Location } from "react-icons/go";
import { GiGraduateCap as Graduate } from "react-icons/gi";
import dataJSON from "./dataCards.json";

const Card = () => {
  const dataCard = dataJSON.map((data) => {
    return (
      <article
        key={data.id}
        className={`relative w-[315px] bg-[#38383863] rounded-xl p-4 flex flex-col border-l-[6px] border-[${data.colorCard}] mr-5`}
      >
        <img
          className="absolute top-0 right-0 w-[140px] h-[140px]"
          src={`/img/icons/${data.circle}`}
          alt="#"
        />
        <div className="flex place-items-center justify-between">
          <div className="flex place-content-center">
            <img className="mr-3" src={`/img/icons/${data.icon}`} alt="#" />
            <h2 className="flex flex-col text-lg font-semibold">
              {data.vacant}{" "}
              <span className="text-sm font-normal text-[#898989] ">
                Posted {data.postDate} days ago.
              </span>
            </h2>
          </div>
          <BsArrowUpRight className="fill-[#FFFFFF] bg-slate-600 rounded-3xl w-7 h-7 p-1" />
        </div>
        <div className="flex">
          <div className="flex place-items-center mt-3 mr-5 bg-[#292929] p-1 rounded-xl text-[#898989]">
            <Location className="mr-3" />
            <p className="text-sm">{data.locationJob}</p>
          </div>
          <div className="flex place-items-center mt-3 mr-5 bg-[#292929] p-1 rounded-xl text-[#898989]">
            <Graduate className="mr-3" />
            <p className="text-sm">{data.experienceJob} years exp.</p>
          </div>
        </div>
        <div className="flex place-items-center mt-3 justify-between">
          <h3 className="text-[#FFFFFF] text-4xl flex place-items-center font-bold">
            {data.applications}{" "}
            <span className="text-[#898989] font-normal text-sm ml-3">
              applications
            </span>
          </h3>
          <p className="text-green-500 text-sm">
            {data.applicationsInWeek} in last week
          </p>
        </div>
      </article>
    );
  });

  return dataCard;
};

export default Card;
