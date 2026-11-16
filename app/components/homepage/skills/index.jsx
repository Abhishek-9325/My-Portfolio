// @flow strict

import { skillsData, skillsCategories } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills &amp; Expertise
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const imgObj = skillsImage(skill);
            return (
              <div
                className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-2.5 sm:m-4 rounded-lg group relative hover:scale-105 cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none group-hover:border-violet-500 transition-all duration-300">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5">
                    <div className="h-8 sm:h-9">
                      {imgObj && (
                        <Image
                          src={imgObj.src}
                          alt={skill}
                          width={36}
                          height={36}
                          className="h-full w-auto rounded-lg"
                        />
                      )}
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Categorized Skills Grid - Center aligned remaining cards in the last row */}
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {skillsCategories.map((group, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] rounded-xl border border-[#252a48] bg-[#0f142a]/80 p-5 backdrop-blur-sm hover:border-violet-500/60 transition-all duration-300 shadow-lg flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-[#252a48]">
              <span className="w-2 h-2 rounded-full bg-[#16f2b3]"></span>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 flex-1 items-start">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs bg-[#171d3a] text-gray-200 border border-[#2b335a] px-3 py-1 rounded-full font-medium transition-colors hover:text-[#16f2b3] hover:border-[#16f2b3]/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
