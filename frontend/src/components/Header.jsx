import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between md:justify-center h-full px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-full items-center z-15">
        <div
          className="flex  md:hidden md:mr-6 cursor-pointer items-center justify-center h-full w-10 rounded-full hover:bg-[#303030]/[0.6]"
          onClick={mobileMenuToggle}
        >
          {mobileMenu ? (
            <CgClose className="text-white text-xl" />
          ) : (
            <SlMenu className="text-white text-xl" />
          )}
        </div>

        <Link to="/" className="flex h-full items-center justify-center">
          <p className="text-white text-5xl font-serif">White Noise!</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
