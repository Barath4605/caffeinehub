import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../../index.css";

const About = ({ imgSrc, title, content, alt }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#imageSrc",
      {
        rotate: 0,
        scale: 0.2,
        y: 50,
        opacity: 0,
      },
      {
        rotate: -45,
        delay: 0.5,
        y: -20, // float upward
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      "#content",
      {
        y: 180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "linear",
      }
    );
  });

  return (
    <section className="flex flex-col h-full ">
      <img
        id="imageSrc"
        className="relative z-5 w-[350px] h-[350px] lg:w-[320px] lg:h-[320px] m-auto top-30 -rotate-45 shrink-0"
        src={imgSrc}
        alt={alt}
        draggable="false"
      />

      <div
        id="content"
        className="relative z-10 mt-10 bg-almond-cream rounded-t-4xl flex flex-col flex-1 overflow-hidden shadow-2xl shadow-black"
      >
        <h1 className="text-6xl p-2 font-bold montserrat almond-cream evergreen text-center shrink-0">
          {title}
        </h1>
        <p className="flex-1 overflow-y-auto p-4 px-4 lg:w-[80%] lg:m-auto montserrat font-semibold evergreen text-center">
          {content}
        </p>
      </div>
    </section>
  );
};

export default About;
