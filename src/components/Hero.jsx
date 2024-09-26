import {  cover } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import { logo } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] -mt-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative rounded-[1rem]">
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/550] lg:aspect-[1024/550] rounded-t-[0.9rem]">
                <img
                  src={cover}
                  className="w-full h-full  "
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
            <Gradient />
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[1rem]">
        </div>
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
