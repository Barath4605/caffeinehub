import Culture from "./components/coffee-101-body/culture-101";
import Instant from "./components/coffee-101-body/instant-101";
import Science from "./components/coffee-101-body/science-101";
import Types from "./components/coffee-101-body/types-101";
import Header from "./components/header";
import Tabs from "./components/ui/Tabs";
import "./index.css";

const CoffeePg = () => {
  const tabClass =
    "m-10 bg-gradient-to-b bg-gradient-to-b from-orange-600/50 via-yellow-400/30 to-orange-800/20 rounded-2xl backdrop-blur-2xl";
  const tabs = [
    {
      title: "Types of Coffee",
      content: (
        <div className={tabClass}>
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
        containerClassName="w-fit m-5 bg-brown-100 rounded-full p-2 text-black m-auto border-t-5 border-amber-950/40"
        tabClassName="mx-2 cursor-pointer"
        activeTabClassName="bg-brown-200 text-2xl"
        contentClassName=""
      />
    </>
  );
};

export default CoffeePg;
