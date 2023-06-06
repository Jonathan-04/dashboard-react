import LogoIcon from "../../assets/img/icons/Star.png";
import SettingsIcon from "../../assets/img/icons/settings.png";
import NotificationIcon from "../../assets/img/icons/notification.png";
import ProfileIcon from "../../assets/img/icons/profile.png";
import SearchIcon from "../../assets/img/icons/search-normal.png";

const Header = () => {
  return (
    <>
      <header className="w-[100%] mx-auto h-20 flex place-items-center">
        <div className="w-80 pl-5 flex">
          <img className="w-8 h-8" src={LogoIcon} alt="#" />
          <h1 className="text-3xl ml-3 text-[#FFFFFF] font-semibold">
            TalentCore
          </h1>
        </div>
        <nav className="w-full pl-5 pr-5 flex place-items-center justify-between">
          <div className="relative flex place-items-center">
            <input
              className="relative w-80 p-2 pl-10 rounded-full outline-none border-none bg-[#292929] text-[#FFFFFF]"
              type="text"
              name="input-search"
              id=""
              placeholder="Search for jobs, candidates and more..."
            />
            <span className="absolute block p-3">
              <img className="w-4" src={SearchIcon} alt="#" />
            </span>
          </div>
          <div className="flex place-items-center">
            <a className="m-3" href="#">
              <img
                className="flex place-items-center bg-[#292929] rounded-3xl p-2"
                src={SettingsIcon}
                alt="#"
              />
            </a>
            <a className="m-3" href="#">
              <img
                className="flex place-items-center bg-[#292929] rounded-3xl p-2"
                src={NotificationIcon}
                alt="#"
              />
            </a>
            <a className="m-3" href="#">
              <img className="w-9" src={ProfileIcon} alt="#" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
