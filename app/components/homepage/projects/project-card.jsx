// @flow strict

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function ProjectCard({ project }) {
  return (
    <div
      className={`from-[#0d1224] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full flex flex-col justify-between transition-all duration-300 ${
        project.isFeatured
          ? "border-violet-500/50 shadow-[0_0_25px_rgba(139,92,246,0.15)]"
          : "border-[#1b2c68a0]"
      }`}
    >
      <div>
        {/* Top gradient accent line */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Window controls bar */}
        <div className="px-4 lg:px-6 py-2.5 flex items-center justify-between border-b border-[#1b2c68a0]">
          <div className="flex flex-row space-x-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-200"></div>
          </div>
          {project.badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2.5 py-0.5 rounded-full">
              {project.badge}
            </span>
          )}
        </div>

        {/* Dedicated full-width title row */}
        <div className="px-4 lg:px-6 py-3.5 bg-[#0a0f26]/50 border-b border-indigo-900/60">
          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              aria-label={`View live demo of ${project.name}`}
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
        </div>
      </div>

      {/* Main card body with code presentation */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden px-4 lg:px-6 py-4 lg:py-6">
        <div>
          {project?.image && (
            <div className="mb-5 overflow-hidden rounded-lg">
              {project.demo ? (
                <Link
                  href={project.demo}
                  target="_blank"
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

          <code className="font-mono text-xs sm:text-sm leading-relaxed block">
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
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
