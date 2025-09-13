"use client";
import { motion } from "motion/react";
import { useState } from "react";
import "../../index.css";
import { cn } from "../../libs/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative lg:px-4 lg:py-2 border-b border-amber-200/30 lg:rounded-full lg:border-none",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 z-2 border-b border-almond-cream bg-transparent sm:border-none sm:rounded-full lg:bg-amber-100/30 ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block font-light montserrat almond-cream">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const tab = tabs[0];
  return (
    <div className="relative w-full h-full">
      <motion.div
        key={tab.value}
        layoutId={tab.value}
        style={{
          scale: 1,
          top: 0,
          zIndex: 0,
          opacity: 1,
          backgroundColor: "#146c4e",
        }}
        animate={{
          y: [0, 40, 0],
        }}
        className={cn("w-full absolute top-0 left-0", className)}
      >
        {tab.content}
      </motion.div>
    </div>
  );
};

export default Tabs;
