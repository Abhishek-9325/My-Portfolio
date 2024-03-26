import {
  projectsData,
  wordpressProjectsData,
} from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const Wordpress = () => {
  return (
    <>
      <div className="flex flex-wrap sm:flex-row flex-col gap-4">
        {wordpressProjectsData.map((project, index) => (
          <div key={index} className="w-full sm:w-[48%] mx-auto max-w-2xl">
            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wordpress;
