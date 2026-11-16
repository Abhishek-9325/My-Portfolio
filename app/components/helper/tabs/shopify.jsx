import { shopifyProjectsData } from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const Shopify = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {shopifyProjectsData.map((project) => (
        <div key={project.id} className="h-full flex flex-col">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Shopify;
