import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading  title="Latest Works" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative bg-n-2/5 rounded-[2.4375rem] overflow-hidden ">
                <div className="relative z-1">
                  <div className=" -my-5 h-full">
                    <img
                      className="w-full h-full object-fit"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
