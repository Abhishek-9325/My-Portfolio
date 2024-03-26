"use client";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { useState } from "react";
import { tabs } from "@/utils/data/tabsData";
import Tab from "../../helper/tabs/tab";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div>
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="tabs flex flex-wrap gap-3 justify-center items-center pb-5">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              onClick={() => handleTabClick(index)}
              isActive={activeTab === index}
            />
          ))}
        </div>
        <div className="tab-content-wrapper">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-content ${activeTab === index ? "active" : ""}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
