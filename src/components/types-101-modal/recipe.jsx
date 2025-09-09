import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "../../index.css";
import { useCoffee } from "./coffeeContext.js";

const Recipe = () => {
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
        duration: isMobile ? 0.6 : 1,
        delay: 0.4,
        ease: "power1.inOut",
      }
    );
  });

  const {
    title = "",
    recipe1 = "",
    recipe2 = "",
    recipe3 = "",
    recipe4 = "",
    src = "",
    alt = "",
  } = useCoffee();

  return (
    <article className="lg:p-3">
      {/* heading */}
      <div className="lg:flex montserrat almond-cream lg:items-end items-center px-2">
        <h2 className="text-4xl font-bold lg:px-3 py-1 border-b lg:border-b-0 lg:border-r w-fit border-white">
          Recipe
        </h2>
        <h4 className="text-md font-md lg:px-3 lg:m-0" ref={headerRef}>
          How it’s made
        </h4>
      </div>

      {/* content */}
      <div className="p-5 lg:h-[60%] overflow-scroll lg:flex lg:items-start lg:justify-around lg:mt-2 lg:border-t lg:border-white/30">
        {/* left: image */}
        <div className="lg:w-1/3 flex justify-center items-start p-4">
          {src && (
            <img
              src={src}
              alt={alt || title}
              className="rounded-lg max-h-[280px] object-cover"
            />
          )}
        </div>

        {/* right: description */}
        <div className="lg:w-2/3 lg:px-6 text-justify">
          <h1 className="text-center text-4xl almond-cream font-bold my-2 lg:text-start lg:pb-2">
            {title}
          </h1>
          <p className="lato almond-cream text-lg mb-4">{recipe1}</p>
          <p className="lato almond-cream text-lg mb-4">{recipe2}</p>
          <p className="lato almond-cream text-lg mb-4">{recipe3}</p>
          <p className="lato almond-cream text-lg">{recipe4}</p>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
