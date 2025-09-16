import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "../../index.css";
import { useCoffee } from "./coffeeContext.js";

const Ingredients = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      headerRef.current,
      {
        x: isMobile ? "0" : "-20",
        y: isMobile ? "-8" : "0",
        opacity: "0",
      },
      {
        [isMobile ? "y" : "x"]: "0",
        opacity: "1",
        duration: isMobile ? "0.6" : "1",
        delay: "0.4",
        ease: "power1.inOut",
      }
    );
  });

  const { prereqs = [], tools = [], endline = "" } = useCoffee();

  return (
    <article className="lg:p-3 flex-1 flex-col h-full">
      <div className="lg:flex montserrat almond-cream lg:items-end items-center px-2">
        <h2 className="text-4xl font-bold lg:px-3 py-1 border-b lg:border-b-0 lg:border-r w-fit border-white">
          Ingredients
        </h2>
        <h4 className="text-md font-md lg:px-3  lg:m-0" ref={headerRef}>
          What you would require
        </h4>
      </div>
      <div className="p-5 h-[80%] lg:h-[60%] overflow-scroll lg:flex lg:items-start lg:justify-around lg:mt-2 lg:border-t lg:border-white/30">
        <div>
          {/* prerequisites  */}
          <h1 className="montserrat text-center text-3xl almond-cream font-semibold lg:text-start lg:text-4xl lg:p-2">
            Prerequisites
          </h1>
          <ol className="montserrat font-md almond-cream pl-6 p-2 border-b lg:border-0 ">
            {prereqs.map((prereq, i) => (
              <li className="list-decimal mb-3 " key={i}>
                {prereq}
              </li>
            ))}
          </ol>
        </div>
        <div>
          {/* tools */}
          <h1 className="montserrat text-center text-3xl almond-cream font-semibold lg:text-start lg:text-4xl lg:p-2">
            How to Make
          </h1>
          <ul className="montserrat font-md almond-cream pl-6 p-2 border-b lg:border-0 ">
            {tools.map((tool, idx) => (
              <li className="list-decimal mb-3 " key={idx}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* endline */}
      <p className="mt-4 montserrat font-2xl p-5 text-justify almond-cream font-semibold lg:text-center">
        {endline}
      </p>
    </article>
  );
};

export default Ingredients;
