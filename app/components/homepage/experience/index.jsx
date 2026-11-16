// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/study.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none select-none"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex justify-center items-start lg:sticky lg:top-24">
            <div className="w-3/4 max-w-md h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-4 sm:p-5 relative">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none select-none"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#2a2e5a]/60">
                      <span className="text-xs sm:text-sm text-[#16f2b3] font-mono">
                        {experience.duration}
                      </span>
                    </div>

                    <div className="flex items-start gap-x-4 sm:gap-x-6 py-4">
                      <div className="text-violet-400 transition-all duration-300 hover:scale-110 flex-shrink-0 mt-1">
                        <BsPersonWorkspace size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                          {experience.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                          {experience.company}
                          {experience.location && (
                            <span className="text-gray-400"> • {experience.location}</span>
                          )}
                        </p>

                        {experience.responsibilities && (
                          <div className="mt-4 pt-3 border-t border-[#2a2e5a]/50">
                            <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                              Key Responsibilities:
                            </p>
                            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 list-disc list-inside">
                              {experience.responsibilities.map((resp, i) => (
                                <li key={i} className="leading-relaxed">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
