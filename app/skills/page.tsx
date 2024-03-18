import TransferLinks from "@/components/TransferLinks";
import React from "react";

import { RxGithubLogo } from "react-icons/rx";
const Skills = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-transparent bg bg-[rgb(8,13,31)] text-white">
      <div className="container px-4 md:px-0">
        <div className="middle-column">
          <div>
            <h1 className="text-xl font-bold text-white">Education</h1>
            <hr className="my-6 border-neutral-100 dark:border-neutral-700"></hr>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <p className=" ">
                  Ho Chi Minh City University of Technology, HCMC
                </p>
                <p className="text-sm">
                  Bachelor’s Degree in Software Engineering
                </p>
              </div>
              <div className="w-full md:w-1/2 text-right">
                <p className="">Enrolled: Sep 2020 — Expected: Sep 2024</p>
                <p className="text-sm">Overall GPA: 3.43/4.0</p>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h1 className="text-xl font-bold ">Projects</h1>
            <hr className="my-6 border-neutral-100 dark:border-neutral-700"></hr>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                <p className=" ">Vair </p>
                <em className="text-sm ">Frontend, Jan 2024 - now</em>
                <ul className="pt-4 list-disc">
                  <li>
                    A school's project (3 members). Vair was planned to become a
                    multi-platform software distribution system.
                  </li>
                  <li>
                    As a team member, my part was to built screens for product
                    details, user profile and home screen
                  </li>
                </ul>{" "}
              </div>
              <div className="w-full md:w-1/3 flex justify-end items-center">
                <a
                  className="group flex transition-all"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/fieztazica/vair_app"
                >
                  <div className="transform transition-transform duration-300 group-hover:-rotate-12 rounded-full bg-neutral-700 dark:bg-neutral-300 p-1 h-fit">
                    <img
                      alt="GitHub logo"
                      src="/github-logo.svg"
                      width="32"
                      height="32"
                    />
                  </div>
                </a>
              </div>
            </div>
            <hr className="my-4 border-neutral-100 dark:border-neutral-700"></hr>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                <p className=" ">Vietnamese' Chess </p>
                <em className="text-sm ">Frontend, Aug - Oct 2023</em>
                <ul className="pt-4 list-disc">
                  <li>
                    An Owlvernyte team's school project (7 members). Vietnamese
                    chess has both stunning look and smooth experience.
                  </li>
                  <li>
                    For this project, there was a lot of things to be done. My
                    jobs in this is to built an account page, a tournament page
                    and logic of the hourse piece.
                  </li>
                </ul>{" "}
              </div>
              <div className="w-full md:w-1/3 flex justify-end items-center">
                <a
                  className="group flex transition-all"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/orgs/Owlvernyte/projects/1"
                >
                  <div className="transform transition-transform duration-300 group-hover:-rotate-12 rounded-full bg-neutral-700 dark:bg-neutral-300 p-1 h-fit">
                    <img
                      alt="GitHub logo"
                      src="/github-logo.svg"
                      width="32"
                      height="32"
                    />
                  </div>
                </a>
              </div>
            </div>
            <hr className="my-4 border-neutral-100 dark:border-neutral-700"></hr>
          </div>
          <div>
            <p className="text-white">
              My other projects can be found on my GitHub:{" "}
              <a
                href="https://github.com/Schjr46"
                className="hover:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Schjr46
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
