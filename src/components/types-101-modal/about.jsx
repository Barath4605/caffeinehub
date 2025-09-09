import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import "../../index.css";
import { useCoffee } from "./coffeeContext.js";

gsap.registerPlugin(SplitText);

const About = () => {
  const { imgSrc, title, content, alt } = useCoffee();
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        imageRef.current,
        {
          rotate: 0,
          scale: 0,
          y: 50,
          opacity: 0,
        },
        {
          rotate: -740,
          delay: 0.8,
          y: -20,
          scale: isMobile ? 1.2 : 1.4,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          y: isMobile ? 180 : 0,
          opacity: isMobile ? 0 : 0.7,
        },
        {
          y: isMobile ? 10 : 0,
          opacity: 1,
          duration: isMobile ? 1 : 0.3,
          ease: "linear",
        }
      );
    });

    return () => ctx.revert();
  });

  return (
    <section className="flex flex-col h-full">
      <img
        ref={imageRef}
        className="relative z-5 w-[350px] h-[350px] lg:w-[320px] lg:h-[320px] m-auto top-30 -rotate-45 shrink-0"
        src={imgSrc}
        alt={alt}
        draggable="false"
      />

      <div
        ref={contentRef}
        className="relative lg:opacity-0 z-10 mt-10 bg-almond-cream rounded-t-4xl flex flex-col lg:flex-row lg:items-center lg:justify-center flex-1 overflow-hidden shadow-2xl shadow-black"
      >
        <h1 className="vibes text-8xl lg:text-[108px] lg:pr-4 p-2 almond-cream evergreen text-center shrink-0 lg:w-[40%] lg:border-r lg:border-green-700">
          {title}
        </h1>
        <p className="flex-1 overflow-y-auto px-4 lato font-semibold evergreen text-center text-xl lg:text-start">
          {content}
        </p>
      </div>
    </section>
  );
};

export default About;
