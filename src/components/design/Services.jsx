import { gradient} from "../../assets";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[70.5625rem] max-w-[79.5625rem] h-[80.5625rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
        src={gradient}
        width={1000}
        height={1000}
        alt="Gradient"
      />
    </div>
  );
};




