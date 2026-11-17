import { shopifyProjectsData } from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const Shopify = () => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-[#242c55] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16f2b3]"></span>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
              Shopify E-Commerce Client Stores
            </h4>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Bespoke Liquid themes, custom checkout journeys, responsive product storytelling, and store overhauls.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#16f2b3] bg-[#16f2b3]/10 px-2.5 py-0.5 rounded-full border border-[#16f2b3]/30 w-fit">
          {shopifyProjectsData.length} E-Commerce Stores
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {shopifyProjectsData.map((project) => (
          <div key={project.id} className="h-full flex flex-col">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopify;
