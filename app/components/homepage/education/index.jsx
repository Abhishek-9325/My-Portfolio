// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import { FaGraduationCap } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none select-none"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
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
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-4 sm:p-5 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none select-none"
                    />
                    <div className="flex justify-center pb-2 border-b border-[#2a2e5a]/60">
                      <p className="text-xs sm:text-sm text-[#16f2b3] font-mono">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-8 px-3 py-4">
                      <div className="text-violet-400 transition-all duration-300 hover:scale-110 flex-shrink-0">
                        <FaGraduationCap size={36} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold tracking-wide">
                          {education.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                          {education.institution}
                        </p>
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

export default Education;
