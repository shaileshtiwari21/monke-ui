import React from "react";
import Logo from "../assets/Vector.png";
import Monke from "../assets/Monke.png";
import Monke1 from "../assets/monke1.png";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import NavIcon from "../assets/Navicon.png";
import Group from "../assets/group.png";
import Arrow from "../assets/arrow.png"
import Trofee from "../assets/trofee.png"
import Home from "../assets/Home.png"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav
    
      className  = " bg-whitefixed bgimg w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600  bgimg"
    >
      
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src={Logo}
            className="h-[40px]  sm:h-[50px] w-full mr-3"
            alt="Flowbite Logo"
          />
          <Image src={Monke} alt="" className="h-8 w-8 sm:hidden ml-8" />
        </a>

        <div className="flex md:order-2">
          <Image
            src={NavIcon}
            alt=""
            className="h-6 mr-14 mt-2 hidden sm:block"
          />
          <Image src={Monke1} alt="" className="h-12 w-12 mr-4 hidden sm:block" />

          <div className="relative hidden sm:block">
            <button
              type="button"
              className="text-[#184623] bg-[#FFFFFF]  focus:outline-none font-medium text-md px-4 py-3 text-center mr-3 md:mr-0 "
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="flex">
                <AiOutlineHome className="mr-2 h-[24px] w-[24px]" />
                Get started{" "}
                <IoIosArrowUp className="ml-2 mt-0.5 h-[20px] w-[24px]" />
              </span>
            </button>

            {showDropdown && (
          <div className="z-10 font-normal bg-white divide-y divide-gray-100  shadow   dark:divide-gray-600 absolute top-0 right-0 mt-[75px] ">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-[#184623] dark:hover:text-emerald-600"
              >
                {" "}
                <span className="flex gap-2">
                <Image  src={Home} />
                 
                  Dashboard
                </span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2   text-[#184623] dark:hover:text-emerald-600"
              >
                <span className="flex gap-2">
                <Image  src={Trofee} />
                 
                  User Dashboard
                </span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-[#184623] dark:hover:text-emerald-600"
              >
                {" "}
                <span className="flex gap-2">
                <Image  src={Arrow} className="h-4" />
                  Disconnect
                </span>{" "}
              </a>
            </li>
          </ul>
          <div className="flex justify-center pt-8 px-8 pb-2">
            <Image src={Monke} alt="" className="h-10 w-10" />
          </div>
          <div className="flex justify-center px-4 pb-4">
            <Image src={Group} alt="" className=" h-6" />
          </div>
        </div>
            )}
          </div>

          <button 
             onClick={() => setShowDropdown(!showDropdown)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        {showDropdown && (
              <div className="z-10 font-normal bg-white divide-y divide-gray-100  shadow   dark:divide-gray-600 absolute top-0 right-0 mt-[75px] sm:hidden">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#184623] dark:hover:text-emerald-600"
                    >
                      {" "}
                      <span className="flex gap-2">
                      <Image  src={Home} className="h-6"/>
                       
                        Dashboard
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2   text-[#184623] dark:hover:text-emerald-600"
                    >
                      <span className="flex gap-2">
                      <Image  src={Trofee} />
                       
                        User Dashboard
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#184623] dark:hover:text-emerald-600"
                    >
                      {" "}
                      <span className="flex gap-2">
                      <Image  src={Arrow} className="h-4" />
                        Disconnect
                      </span>{" "}
                    </a>
                  </li>
                </ul>
                <div className="flex justify-center pt-8 px-8 pb-2">
                  <Image src={Monke} alt="" className="h-10 w-10" />
                </div>
                <div className="flex justify-center px-4 pb-4">
                  <Image src={Group} alt="" className=" h-6" />
                </div>
              </div>
            )}
        <Image src={Monke} alt="" className="h-14 lg:ml-48 hidden sm:block" />
      </div>
    </nav>
  );
};

export default Navbar;