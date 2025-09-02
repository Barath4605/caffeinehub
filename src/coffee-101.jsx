import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Culture from "./components/coffee-101-body/culture-101";
import Instant from "./components/coffee-101-body/instant-101";
import Science from "./components/coffee-101-body/science-101";
import Types from "./components/coffee-101-body/types-101";
import Header from "./components/header";
import Tabs from "./components/ui/Tabs";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const CoffeePg = () => {
  const container = useRef(null);
  const tabClass = "almond-cream bg-evergreen";
  const tabs = [
    {
      title: "Types of Coffee",
      content: (
        <div id="types" className={tabClass}>
          <Types />
        </div>
      ),
    },
    {
      title: "Culture of Coffee",
      content: (
        <div className={tabClass}>
          <Culture />
        </div>
      ),
    },
    {
      title: "Science & Health",
      content: (
        <div className={tabClass}>
          <Science />
        </div>
      ),
    },
    {
      title: "Instant Coffee",
      content: (
        <div className={tabClass}>
          <Instant />
        </div>
      ),
    },
  ];

  return (
    <>
      <main className="bg-evergreen h-full " ref={container}>
        <Header
          title="Coffee 101"
          tagline="an espresso before the depresso"
        ></Header>
        <Tabs
          tabs={tabs.map((tab, index) => ({
            ...tab,
            key: index,
            value: tab.title,
          }))}
          containerClassName="w-fit m-5 p-2 m-auto"
          tabClassName="mx-2 cursor-pointer"
          activeTabClassName="text-2xl"
          contentClassName="bg-evergreen"
          className="bg-evergreen"
        />
      </main>
    </>
  );
};

export default CoffeePg;
