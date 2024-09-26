import Heading from "./Heading";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { socials } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 mx-auto mt-20">
        <Heading className="md:max-w-md lg:max-w-2xl" title="About Me" />
        <div className="flex flex-wrap w-full gap-10">
          <div className="relative w-full h-96 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 bg-n-3/5">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"></div>
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300 hover:blur-sm hover:opacity-10"></div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 text-white">
              <p className="text-lg md:text-xl lg:text-sm leading-relaxed md:leading-loose lg:leading-loose font-light max-w-2xl px-4 md:px-8">
                Hello! I’m Hassan Al-Arabi, a creative and passionate graphic
                designer. I have been working in the design field for 8 years,
                enjoying the process of transforming ideas into distinctive
                visual designs that reflect brand identity.
                <br />
                <br />
                I specialize in providing innovative design solutions that blend
                creativity with functionality. Whether you need a logo, book
                covers, or poster materials, I always strive to deliver results
                that exceed client expectations.
                <br />
                <br />
                I believe in the power of design to impact experiences and leave
                a lasting impression. I work closely with my clients to
                understand their vision and turn it into a visual reality.
                <br />
                <br />
                Let’s embark on this design journey together!
              </p>
            </div>
          </div>
          <ul className="flex gap-5 flex-wrap mx-auto mt-5">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-15 h-15 bg-n-4/5 rounded-full transition-colors hover:bg-n-4/20"
              >
                <img
                  src={item.iconUrl}
                  width={25}
                  height={25}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Benefits;
