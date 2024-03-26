import { projectsData, shopifyProjectsData } from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const Shopify = () => {
  return (
    <>
      <div className="flex flex-wrap sm:flex-row flex-col gap-4">
        {shopifyProjectsData.map((project, index) => (
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

export default Shopify;
