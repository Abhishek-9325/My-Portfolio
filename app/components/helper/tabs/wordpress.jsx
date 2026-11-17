import { wordpressProjectsData } from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const Wordpress = () => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-[#242c55] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
              WordPress &amp; Enterprise Client Platforms
            </h4>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Custom theme engineering, responsive cross-device optimizations, GSAP animations, and high-traffic portals.
          </p>
        </div>
        <span className="text-[11px] font-mono text-violet-300 bg-violet-950/40 px-2.5 py-0.5 rounded-full border border-violet-500/30 w-fit">
          {wordpressProjectsData.length} Client Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {wordpressProjectsData.map((project) => (
          <div key={project.id} className="h-full flex flex-col">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wordpress;
