// @flow strict

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { BsArrowUpRight, BsBoxArrowUpRight } from "react-icons/bs";
import ArchitectureDiagram from "./architecture-diagram";

function ProjectCard({ project }) {
  return (
    <div
      className={`from-[#0d1224] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full flex flex-col justify-between transition-all duration-300 ${
        project.isFeatured
          ? "border-violet-500/50 shadow-[0_0_25px_rgba(139,92,246,0.15)]"
          : project.isPersonal
          ? "border-[#1e2a52] hover:border-cyan-500/40"
          : "border-[#1b2c68a0]"
      }`}
    >
      <div>
        {/* Top gradient accent line */}
        <div className="flex flex-row">
          <div
            className={`h-[1px] w-full bg-gradient-to-r ${
              project.isFeatured
                ? "from-transparent via-pink-500 to-violet-600"
                : project.isPersonal
                ? "from-transparent via-cyan-500 to-violet-600"
                : "from-transparent via-violet-500 to-transparent"
            }`}
          ></div>
          <div
            className={`h-[1px] w-full bg-gradient-to-r ${
              project.isFeatured
                ? "from-violet-600 to-transparent"
                : project.isPersonal
                ? "from-violet-600 to-transparent"
                : "from-transparent to-transparent"
            }`}
          ></div>
        </div>

        {/* Window controls bar */}
        <div className="px-4 lg:px-6 py-2.5 flex items-center justify-between border-b border-[#1b2c68a0]">
          <div className="flex flex-row space-x-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-200"></div>
          </div>

          <div className="flex items-center gap-2">
            {project.clientRef && (
              <a
                href={project.clientRef}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.clientRefLabel || "client platform"}`}
                className="inline-flex items-center gap-1 text-[10px] text-cyan-300 hover:text-cyan-200 transition-colors bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded-full font-medium"
              >
                <span>{project.clientRefLabel || "Platform Ref"}</span>
                <BsBoxArrowUpRight className="text-[9px]" />
              </a>
            )}

            {project.badge && (
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  project.isFeatured
                    ? "bg-pink-500/20 text-pink-300 border-pink-500/40"
                    : project.isPersonal
                    ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                    : "bg-violet-500/20 text-violet-300 border-violet-500/40"
                }`}
              >
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Dedicated full-width title row */}
        <div className="px-4 lg:px-6 py-3.5 bg-[#0a0f26]/50 border-b border-indigo-900/60 flex items-center justify-between gap-2">
          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live website or demo of ${project.name}`}
              className="inline-flex items-center gap-1.5 group text-[#16f2b3] hover:text-white transition-colors"
            >
              <h3 className="text-base sm:text-lg font-bold tracking-wide">
                {project.name}
              </h3>
              <BsArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          ) : (
            <h3 className="text-base sm:text-lg font-bold text-[#16f2b3] tracking-wide">
              {project.name}
            </h3>
          )}

          {project.demo && (
            <span className="text-[10px] text-gray-400 font-mono hidden sm:inline-block">
              [Live Website]
            </span>
          )}
        </div>
      </div>

      {/* Main card body */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden px-4 lg:px-6 py-4 lg:py-6">
        <div>
          {project?.image && (
            <div className="mb-5 overflow-hidden rounded-lg">
              {project.demo ? (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project ${project.name}`}
                >
                  <Image
                    src={project.image}
                    width={600}
                    height={300}
                    alt={`Screenshot of ${project.name}`}
                    className="rounded-lg w-full h-[200px] object-cover transition-all duration-700 hover:scale-105 cursor-pointer border border-[#2a2e5a]"
                  />
                </Link>
              ) : (
                <Image
                  src={project.image}
                  width={600}
                  height={300}
                  alt={`Screenshot of ${project.name}`}
                  className="rounded-lg w-full h-[200px] object-cover border border-[#2a2e5a]"
                />
              )}
            </div>
          )}

          <code className="font-mono text-xs sm:text-sm leading-relaxed block overflow-x-auto">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>

            <div>
              <span className="ml-4 lg:ml-6 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-6 mr-2">
              <span className="text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {project.tools.length - 1 !== i && (
                    <span className="text-gray-400">{`', '`}</span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-gray-400">{`],`}</span>
            </div>

            <div className="ml-4 lg:ml-6 mr-2">
              <span className="text-white">description:</span>
              <span className="text-gray-400">{` '`}</span>
              <span className="text-cyan-300">{project.description}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            {project.contributions && (
              <div className="ml-4 lg:ml-6 mr-2">
                <span className="text-white">keyContributions:</span>
                <span className="text-gray-400">{` [`}</span>
                <div className="ml-4">
                  {project.contributions.map((item, i) => (
                    <div key={i}>
                      <span className="text-gray-400">{`'`}</span>
                      <span className="text-yellow-200">{item}</span>
                      <span className="text-gray-400">
                        {i < project.contributions.length - 1 ? `',` : `'`}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">{`],`}</span>
              </div>
            )}

            {project.impact && (
              <div>
                <span className="ml-4 lg:ml-6 mr-2 text-white">impact:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400 font-semibold">{project.impact}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
            )}

            <div>
              <span className="text-gray-400">{"};"}</span>
            </div>
          </code>

          {/* High-Level Architecture Diagram for Featured Engineering Projects */}
          {project.diagramId && (
            <ArchitectureDiagram diagramId={project.diagramId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
