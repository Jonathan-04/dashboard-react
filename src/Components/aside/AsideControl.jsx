import { AiOutlineAppstore as GridView } from "react-icons/ai";
import { AiOutlineMail as Email } from "react-icons/ai";
import { AiOutlineCalendar as Calendar } from "react-icons/ai";
import { AiOutlineFolder as Folder } from "react-icons/ai";
import { AiOutlineUsergroupAdd as CandidatesGroup } from "react-icons/ai";
import { BsDiagram3 as Diagram } from "react-icons/bs";
import { GrPersonalComputer as Computer } from "react-icons/gr";
import { AiOutlineUser as Person } from "react-icons/ai";
import { AiOutlineFileSearch as Document } from "react-icons/ai";
import { HiOutlineDocumentReport as Reports } from "react-icons/hi";

const AsideControl = () => {
  return (
    <aside className="w-80 pt-3">
      <div className="mb-9">
        <ul className="items-aside">
          <li>
            <span>
              <GridView />
            </span>
            Dashboard
          </li>
          <li>
            <span>
              <Email />
            </span>
            Messages
          </li>
          <li>
            <span>
              <Calendar />
            </span>
            Calendar
          </li>
        </ul>
      </div>

      <div className="mb-9">
        <h3 className="mb-3 text-sm font-normal ml-9 text-[#898989]">
          RECRUITMENT
        </h3>
        <ul className="items-aside">
          <li>
            <span>
              <Folder />
            </span>
            Jobs
          </li>
          <li>
            <span>
              <CandidatesGroup />
            </span>
            Candidates
          </li>
          <li>
            <span>
              <Diagram />
            </span>
            Referrals
          </li>
          <li>
            <span>
              <Computer />
            </span>
            Career Site
          </li>
        </ul>
      </div>

      <div className="mb-9">
        <h3 className="mb-3 text-sm font-normal ml-9 text-[#898989]">
          ORGANIZATION
        </h3>
        <ul className="items-aside">
          <li>
            <span>
              <Person />
            </span>
            Employees
          </li>
          <li>
            <span>
              <Document />
            </span>
            Documents
          </li>
          <li>
            <span>
              <Reports />
            </span>
            Reports
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideControl;
