import { AiOutlineClose as Close } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import PhotoUser from "../../assets/img/photo/photo1.png";
const AsideUser = () => {
  return (
    <>
      <aside className="fixed w-[460px] z-10 bg-[#151515] h-[100%] right-0 ">
        <div className="flex justify-between m-6">
          <h2 className="font-semibold text-xl">Candidate Details</h2>
          <Close className="bg-[#1E1E1E] fill-[#FFFFFF] rounded-3xl w-6 h-6 p-1" />
        </div>
        <div className="bg-[#1E1E1E] m-6 flex flex-col items-center p-4">
          <img className="mr-3 w-9" src={PhotoUser} alt="#" />
          <h2 className="font-semibold text-[#FFFFFF] text-xl">
            Malaika Brown
          </h2>
          <p className="text-[#898989] text-sm">Sr. UX Designer</p>
          <div className="flex justify-between mt-11">
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
      </aside>
    </>
  );
};

export default AsideUser;
