// @flow strict

import { personalData } from "@/utils/data/personal-data";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";

function AboutSection() {
  return (
    <div id="about" className="mb-12 mt-6 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am
          </p>
          <div className="flex flex-col gap-4 text-gray-300 text-sm lg:text-base leading-relaxed">
            {Array.isArray(personalData.description) ? (
              personalData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{personalData.description}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="w-full max-w-md h-full">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
