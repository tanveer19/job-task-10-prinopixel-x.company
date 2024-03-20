import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-9 flex justify-between">
      <div>
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" width={48} height={48} />
        </Link>
      </div>
      <div>
        <Link to="#">menu</Link>
      </div>
    </div>
  );
};

export default Header;
