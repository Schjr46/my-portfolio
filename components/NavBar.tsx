import React from "react";
import Link from "next/link";
import { Socials } from "../app/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#000514]/50 bg-[#000514] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
        
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Truong Huynh
            </span>

        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#4263f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <Link href="/" className="cursor-pointer">
              Home
            </Link>  <Link href="/skills" className="cursor-pointer">
              Experience
            </Link>
            <Link href="/projects" className="cursor-pointer">
            Resume
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
