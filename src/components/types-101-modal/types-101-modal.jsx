import { useState } from "react";
import { createPortal } from "react-dom";
import "../../index.css";
import About from "./about";
import Ingredients from "./ingredients";
import Intensity from "./intensity";
import Recipe from "./recipe";

const TypesModal = ({ onClose, imgSrc, title, content, alt }) => {
  const tabs = ["About", "Ingredients", "Recipe", "Intensity"];
  const [tab, setTab] = useState(0);
  const tabStates = [
    <About imgSrc={imgSrc} title={title} content={content} alt={alt} />,
    <Ingredients />,
    <Recipe />,
    <Intensity />,
  ];

  return createPortal(
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-lg overflow-hidden">
      <div
        className="w-full lg:w-[70%] h-full lg:h-[80%] rounded-lg bg-white flex justify-between flex-col bg-evergreen-dark"
        onClick={(e) => e.stopPropagation()}
      >
        {/* show only active tab */}
        <div className="flex px-2 justify-end bg-evergreen-dark">
          <h1
            className="p-1 w-fit h-fit lg:h-full cursor-pointer text-white/50 hover:text-white"
            onClick={onClose}
          >
            X
          </h1>
        </div>
        {/* tabs */}
        <div className="flex text-white/60 lato lg:justify-center p-2 justify-around m-auto overflow-x-scroll w-[80%]">
          {tabs.map((tabName, index) => (
            <button
              key={tabName}
              onClick={() => setTab(index)}
              className={`text-md font-semibold lg:mx-4 p-2 transition-all ease-in-out duration-200 cursor-pointer ${
                tab === index
                  ? "border-b border-amber-100/70 almond-cream"
                  : "border-b border-amber-200/20"
              }`}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="flex-1 justify-between">{tabStates[tab]}</div>
      </div>
    </div>,
    document.body
  );
};

export default TypesModal;
