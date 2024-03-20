import React from "react";
import { Link } from "react-router-dom";
import { NavMobile } from "../nav-mobile";

const Header = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-9 flex justify-between">
      <div>
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" width={48} height={48} />
        </Link>
      </div>
      <div>
        <NavMobile></NavMobile>
      </div>
    </div>
  );
};

export default Header;
