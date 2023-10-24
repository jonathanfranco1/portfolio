"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Javascript</li>
        <li>C/C++</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Three.js</li>
        <li>MATLAB</li>
        <li>Swift</li>
        <li>Ruby</li>
        <li>ASP .NET</li>
        <li>Rust</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Arizona State University</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Breakthrough Junior Challenge Global Semifinalist</li>
        <li>Breakthrough Junior Challenge Top 5 North America</li>
        <li>Austin Innovator's 25 under 25 </li>
        <li>CBS and Spectrum News Interviewee</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero-image.png" width={500} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack software developer, with a primary focus in backend development. 
            I have experience with Python, Javascript, C/C++, HTML, CSS, React, etc.. Additionally,
            I also have experience developing software for embedded systems, such as a CubeSat's radio, SD card, and payload
            I have been mainly focusing on recently. Whether it's building web applications, crafting mobile apps, or optimizing backend systems, 
            I approach every project with a commitment to excellence and a drive to deliver results. 
            I'm excited to showcase my work and collaborate on exciting software projects. Let's bring ideas to life through code!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
