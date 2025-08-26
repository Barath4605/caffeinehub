import { useState } from "react";
import Culture from "./components/coffee-101-body/culture-101";
import Instant from "./components/coffee-101-body/instant-101";
import Science from "./components/coffee-101-body/science-101";
import Types from "./components/coffee-101-body/types-101";
import Header from "./components/header";
import Tabs from "./components/ui/Tabs";
import "./index.css";

const CoffeePg = () => {
  const tabs = [
    {
      title: "Types of Coffee",
      brief:
        "Explore all the different types of Coffees from espresso shots to an americano to gesha...",
    },
    {
      title: "Culture of Coffee",
      brief:
        "Learn the history of coffee, its origin, how it spread across the world and much more...",
    },
    {
      title: "Science & Health",
      brief:
        "Know the health benefits of coffee, how it affects your body and mind and the science behind it...",
    },
    {
      title: "Instant Coffee",
      brief: "Overrated or Overhated ??",
    },
  ];

  const [switchPage, setSwitchPage] = useState(0);

  return (
    <>
      <Header
        title="Coffee 101"
        tagline="an espresso before the depresso"
      ></Header>
      <Tabs
        tabs={tabs.map((tab, index) => ({
          ...tab,
          value: tab.title,
          onClick: () => setSwitchPage(index),
        }))}
        containerClassName="w-fit m-5 bg-brown-100 rounded-full p-2 text-black m-auto border-t-5 border-amber-950/40"
        tabClassName="mx-2 cursor-pointer"
        activeTabClassName="bg-brown-200 text-2xl"
      />
      {switchPage == 0 && <Types />}
      {switchPage == 1 && <Culture />}
      {switchPage == 2 && <Science />}
      {switchPage == 3 && <Instant />}
    </>
  );
};

export default CoffeePg;
