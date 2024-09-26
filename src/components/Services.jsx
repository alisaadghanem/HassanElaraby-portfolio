import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section
      id="how-to-use"
      className="relative 
      py-5 lg:py-16 xl:py-5 "
    >
      <div className="container">
        <Heading title="Services" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-40 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 ">
              <img
                className="w-100 h-full md:object-right"
                width={640}
                height={530}
                alt="book"
                src={service2}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h3 mb-4">Book Covers</h4>
              <p className="body-2 mb-[3rem] text-n-2">
                I specialize in designing captivating book covers that reflect
                the essence of the story within. By combining typography,
                imagery, and color, I create visually stunning covers that not
                only attract readers but also convey the mood and theme of the
                book.
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service1}
                  className="h-full w-full object-fit"
                  width={640}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-2">
                  enhancing images through color correction, retouching, and
                  creative compositing.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-13/10 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className=" px-4 xl:px-8">
                <h4 className="h4 mb-4">Posters</h4>
                <p className="body-2 mb-[2rem] text-n-2">
                  I create eye-catching posters that blend visuals and
                  typography to convey powerful messages. Whether for events,
                  promotions, or artistic expression, my designs aim to
                  captivate and engage audiences, making a lasting impact.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[35rem]">
                <img
                  src={service3}
                  className="w-full h-full object-fit"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
