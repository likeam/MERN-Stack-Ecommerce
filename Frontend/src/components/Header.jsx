import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpned, setmenuOpned] = useState(false);
  const toggleMenu = () => setmenuOpned(!menuOpned);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className=" fixed top-0 left-0 m-auto  w-full bg-white ring-4 ring-slate-900/5 z-10 ">
      <div className=" px-4 flexBetween py-3 max-xs:px-2">
        {/* LOGO */}
        <Link>
          {" "}
          <img src={Logo} alt="" height={66} width={88} />
        </Link>

        {/* Navbar */}
        <Navbar
          containerStyles={" hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "}
        />
        {/* Navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpned
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900 transition-all duration-300 "
              : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* Button */}
        <div className=" flexBetween  sm:gap-x-2 bold-16">
          {!menuOpned ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className=" flexBetween sm:gap-x-6">
            <NavLink to={"cart"} className={"flex"}>
              {" "}
              <FaOpencart className=" p-1 h-8 w-8 ring-1 ring-slate-900/30 rounded-full" />
              <span className=" relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {/* <NavLink to={'logout'} className={' btn_secondary_rounded flexCenter gap-x-2 medium-16'}> <img src={logout} className='' alt="logouticon" height={19} width={19} /> Logout</NavLink> */}
            <NavLink
              to={"login"}
              className={" btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              {" "}
              <img
                src={user}
                className=""
                alt="loginicon"
                height={19}
                width={19}
              />{" "}
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
