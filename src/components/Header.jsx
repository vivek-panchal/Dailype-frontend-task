import React from "react";
import logo from "/assets/images/dailype-logo.png";
import userIcon from "/assets/images/user.png"
import logoutIcon from "/assets/images/logout.png"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#e7eeff] ">
      <div className="flex justify-start items-center gap-1 cursor-pointer">
        <img src={logo} alt="dailype" className="w-5 h-5" />
        <span className="text-2xl font-medium">dailype</span>
      </div>
      <div className="flex justify-start items-center gap-3">
        <img src={userIcon} alt="user" className="w-8 h-8 rounded-full cursor-pointer" />
        <span className="max-sm:hidden">Marg Techno Projects Pvt Ltd</span>
        <img src={logoutIcon} alt="logout" className="w-6 h-6 ml-1 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
