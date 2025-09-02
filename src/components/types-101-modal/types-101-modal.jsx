import { useState } from "react";
import { createPortal } from "react-dom";
import "../../index.css";
import About from "./about";
import Ingredients from "./ingredients";
import Intensity from "./intensity";
import Recipe from "./recipe";

const TypesModal = ({ onClose }) => {
  const tabs = ["About", "Ingredients", "Recipe", "Intensity"];
  const [tab, setTab] = useState(0);
  const tabStates = [<About />, <Ingredients />, <Recipe />, <Intensity />];

  return createPortal(
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="w-[80%] lg:w-[70%] h-[70%] lg:h-[80%] p-4 rounded-lg bg-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* show only active tab */}
        <div className="flex-1 overflow-y-auto">{tabStates[tab]}</div>

        {/* tabs */}
        <div className="flex text-black lato justify-around mt-2 m-auto border-t overflow-x-scroll w-[80%] border-black/30">
          {tabs.map((tabName, index) => (
            <button
              key={tabName}
              onClick={() => setTab(index)}
              className={`text-md mx-1 p-2 mt-1 transition-all ease-in-out duration-200 ${
                tab === index
                  ? "border-b border-green-700 evergreen"
                  : "border-b border-green-700/20"
              }`}
            >
              {tabName}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TypesModal;
