import { projectsData } from "@/utils/data/projects-data";
import React from "react";
import ProjectCard from "../../homepage/projects/project-card";

const ReactProjects = () => {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);
  const personalProjects = projectsData.filter((p) => p.isPersonal);

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Engineering & Production Automation Projects */}
      <div>
        <div className="mb-6 pb-2 border-b border-[#242c55] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                Featured Engineering Projects
              </h4>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Production applications, API integrations, queue architectures, and automated performance pipelines.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#16f2b3] bg-[#16f2b3]/10 px-2.5 py-0.5 rounded-full border border-[#16f2b3]/30 w-fit">
            3 Production Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {featuredProjects.map((project) => (
            <div key={project.id} className="h-full flex flex-col">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Personal & Exploratory Projects */}
      {personalProjects.length > 0 && (
        <div className="pt-6 border-t border-[#1f264d]">
          <div className="mb-6 pb-2 border-b border-[#242c55] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                  Personal &amp; Concept Applications
                </h4>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Independent full-stack architectures, headless CMS integrations, and real-time experiments.
              </p>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/30 w-fit">
              Personal Work
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {personalProjects.map((project) => (
              <div key={project.id} className="h-full flex flex-col">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactProjects;
