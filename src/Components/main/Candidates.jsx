import { AiFillStar as Star } from "react-icons/ai";
import PhotoUser from "../../assets/img/photo/photo1.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates();
  }, []);

  function getCandidates() {
    axios
      .get("http://localhost/api/dashboard-react/index.php")
      .then(function (response) {
        //console.log(response.data);
        setCandidates(response.data);
      });
  }

  const data = candidates.map((data, key) => {
    return (
      <>
        <tr key={key} className="items-table">
          <td className="flex place-items-center">
            <img className="mr-3" src={PhotoUser} alt="#" />
            {data.name} {data.last_name}
          </td>
          <td className="">
            <div className="flex items-center">
              <Star className="fill-yellow-400 w-5 h-5" />
              <span className="ml-1">3</span>
            </div>
          </td>
          <td>{data.stages}</td>
          <td>{data.appliede_role}</td>
          <td>{data.application_date}</td>
          <td>2 files</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Candidates</h2>
        <select
          className="bg-[#1E1E1E] text-[#898989] p-3 border-none rounded-3xl"
          id=""
        >
          <option value="">March 2023</option>
        </select>
      </div>
      <div className="mt-5 rounded-xl p-4 bg-[#38383863]">
        <div className="mb-8">
          <a href="" className="mr-9 text-[#898989]">
            All
          </a>
          <a href="" className="mr-9 text-[#898989]">
            Accepted
          </a>
          <a href="" className="mr-9 text-[#898989]">
            Rejected
          </a>
        </div>
        <table className="w-[100%] border-collapse border-none">
          <tr className="w-[172px] text-[#898989] text-sm text-left bg-[#262626] pt-3 pb-3">
            <th>CANDIDATE NAME</th>
            <th>RATING</th>
            <th>STAGES</th>
            <th>APPLIEDE ROLE</th>
            <th>APPLICATION DATE</th>
            <th>ATTACHMENTS</th>
          </tr>
          {data}
        </table>
      </div>
    </>
  );
};

export default Candidates;
