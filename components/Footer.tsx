import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import TransferLinks from "./TransferLinks";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full shadow-lg shadow-[#000514]/50 bg-[#000514] backdrop-blur-md text-white">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                  <TransferLinks url="https://www.youtube.com/channel/UCEG5sgFKieaUuHsu5VG-kBg" logo={<FaYoutube/>} name="Youtube"/>
                  <TransferLinks url="https://github.com/Owlvernyte" logo={<RxGithubLogo/>} name="Github"/>
                  <TransferLinks url="https://discord.gg/Sm4yeR92Hv" logo={<RxDiscordLogo/>} name="Discord"/>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start ">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <TransferLinks url="https://www.facebook.com/huynh.nhattruong.71/" logo={<FaFacebook/>} name="Facebook"/>
                    <TransferLinks url="https://www.instagram.com/truongnhhuynh/" logo={<RxInstagramLogo/>} name="Instagram"/>
                    <TransferLinks url="https://www.linkedin.com/in/nhat-truong-huynh-69255b2a0/" logo={<RxLinkedinLogo/>} name="Linkedin"/>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start ">
                    <div className="font-bold text-[16px]">About Me</div>
                    <TransferLinks url="mailto:huynhnhattruonglt@gmail.com" logo={<MdEmail/>} name="Email"/>
                    <TransferLinks url="https://github.com/Schjr46" logo={<RxGithubLogo/>} name="Github"/>
                    <div className="invisible">''</div>
                    <div className="invisible">''</div>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Schjr 2024 All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer