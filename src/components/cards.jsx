import { useState } from "react";
import { TfiFullscreen } from "react-icons/tfi";
import "../index.css";
import TypesModal from "./types-101-modal/types-101-modal";

const Cards = ({
  title,
  p1,
  p2,
  p3,
  imgSrc,
  alt,
  content,
  prereqs,
  tools,
  endline,
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  src,
}) => {
  const paraClass =
    "lg:w-[60%] lg:text-justify lato-regular text-md lg:pl-2 lg:border-l-1 lg:border-green-800/70 rounded-x-xl";

  const [isOpen, setIsOpen] = useState(false);

  const mobileView = window.innerWidth < 1024;

  return (
    <>
      <section
        className="p-3 lg:m-0 lg:p-5 cursor-pointer bg-almond-cream evergreen hover:scale-[1.01] hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.1),_0_10px_10px_rgba(0,0,0,0.04)] transition-all ease-in-out duration-300"
        onClick={!mobileView ? () => setIsOpen(true) : undefined}
      >
        <div className="flex items-center justify-between lg:flex-none">
          <h1 className="text-5xl montserrat text-center lg:pb-0 lg:border-none pb-2 border-b border-green-800/70 lg:text-start evergreen my-3 ">
            {title}
          </h1>
          {mobileView && (
            <div>
              <TfiFullscreen onClick={() => setIsOpen(true)} />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 w-fit">
            <p className={paraClass}>{p1}</p>
            <p className={paraClass}>{p2}</p>
            <p className={paraClass}>{p3}</p>
            {isOpen && (
              <TypesModal
                coffee={{
                  imgSrc,
                  title,
                  content,
                  alt,
                  prereqs,
                  tools,
                  endline,
                  recipe1,
                  recipe2,
                  recipe3,
                  recipe4,
                  src,
                }}
                onClose={() => setIsOpen(false)}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
