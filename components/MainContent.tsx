import React from "react";
import Image from "next/image";

const MainContent = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-transparent bg">
      <div className="flex flex-col gap-20 max-w-screen-xl w-full px-8 md:flex-row">
        <div className="flex flex-col justify-center items-start w-full md:w-3/4">
          <h1 className="text-4xl font-bold text-white">
            Hello, My name is Truong!
          </h1>
          <p className="text-white">
            I&apos;m a student at HUTECH and major in Software Engineering. As a
            student, I currently improve my skills by making some pet projects
            with my friends at
            <span className="bg-black">
              {" "}
              <a href="https://github.com/Owlvernyte">
                <Image
                  src="/nyte-logo.svg"
                  alt="Nyte Logo"
                  aria-label="Nyte Logo"
                  width={16}
                  height={16}
                  className="inline-flex"
                />
                <span className="ml-1">Owlvernyte</span>
              </a>
            </span>
            . I often take frontend tasks for those pet projects so I&apos;d
            love to spend more time with backend or mobile projects.
          </p>
          <div className="text-white pt-20">
            <p>
              {" "}
              Here are what i have learn through out the years at
              university(including my personal and group projects)
            </p>
          </div>
          <div className="text-white pt-10">
            <h1 className="text-xl">Web development</h1>
            <ul className="text-white/75">
              <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Express.js</li>
              <li>ASP.NET Core</li>
              <li>Java Spring Boot</li>
            </ul>
          </div>
          <div className="text-white pt-10">
            <h1 className="text-xl">Mobile Development</h1>
            <ul className="text-white/75">
              <li>Flutter</li>
              <li>Java Android</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full md:w-1/4 flex justify-center items-center">
          <Image src="/myface.png" alt="avatar" width={500} height={500} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
