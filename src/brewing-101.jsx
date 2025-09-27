import { useState } from "react";
import aeropress from "./assets/aeropress.png";
import espressomachine from "./assets/espressomachine.png";
import frenchpress from "./assets/frenchpress.png";
import mokapot from "./assets/mokapot.png";
import pourover from "./assets/pourover.png";
import Tools from "./components/brewing-tools";
import Header from "./components/header";
import "./index.css";

const Brewing = () => {
  const tools = [
    {
      title: "French Press",
      tagline: "Rich and full-bodied coffee with a robust flavor.",
      imgSrc: frenchpress,
      equipments: "French Press, Kettle, Grinder, Scale, Timer, Stirrer, Mug",
      grind: "Coarse Grind with 8 grams of powder for 120ml of water.",
      prep1: "Boil water and let it cool for 30 seconds (to ~200°F).",
      prep2: "Add coffee grounds to the French press.",
      prep3:
        "Pour hot water over the grounds, stir gently, place the lid on, and steep for 4 minutes.",
      mistake1: "Too fine grind → sludge",
      mistake2: "over-steep → bitter",
      mistake3: "rinse press to reduce sediment.",
    },
    {
      title: "Pour Over",
      tagline: "Clean and bright coffee with nuanced flavors.",
      imgSrc: pourover,
      equipments:
        "Pour Over Dripper, Filter, Kettle, Grinder, Scale, Timer, Mug",
      grind: "Medium-Fine Grind with 10 grams of powder for 180ml of water.",
      prep1: "Boil water and let it cool for 30 seconds (to ~200°F).",
      prep2: "Place filter in dripper and rinse with hot water.",
      prep3:
        "Add coffee grounds to the filter. Pour hot water in a circular motion, allowing the coffee to bloom for 30 seconds, then continue pouring until you reach the desired amount.",
      mistake1: "Pouring too fast → under-extraction",
      mistake2: "Pouring too slow → over-extraction",
      mistake3: "Not rinsing filter → papery taste.",
    },
    {
      title: "Espresso Machine",
      tagline: "Intense and concentrated coffee with a rich crema.",
      imgSrc: espressomachine,
      equipments: "Espresso Machine, Grinder, Tamper, Scale, Timer, Mug",
      grind: "Fine Grind with 18-20 grams of powder for a double shot (60ml).",
      prep1: "Preheat the espresso machine and portafilter.",
      prep2:
        "Grind coffee beans to a fine consistency and dose into the portafilter.",
      prep3:
        "Tamp the grounds evenly and firmly. Lock the portafilter into the machine and start the extraction. Aim for a 25-30 second extraction time.",
      mistake1: "Too coarse grind → weak shot",
      mistake2: "Too fine grind → over-extraction",
      mistake3: "Inconsistent tamping → uneven extraction.",
    },
    {
      title: "AeroPress",
      tagline: "Versatile and smooth coffee with a rich flavor profile.",
      imgSrc: aeropress,
      equipments: "AeroPress, Filter, Kettle, Grinder, Scale, Timer, Mug",
      grind: "Medium-Fine Grind with 15 grams of powder for 200ml of water.",
      prep1: "Boil water and let it cool for 30 seconds (to ~200°F).",
      prep2: "Place a filter in the AeroPress cap and rinse with hot water.",
      prep3:
        "Add coffee grounds to the AeroPress. Pour hot water over the grounds, stir gently, then insert the plunger and press down slowly.",
      mistake1: "Too fast pressing → weak coffee",
      mistake2: "Too slow pressing → over-extraction",
      mistake3: "Not rinsing filter → papery taste.",
    },
    {
      title: "Moka Pot",
      tagline: "Strong and rich coffee with a robust flavor.",
      imgSrc: mokapot,
      equipments: "Moka Pot, Kettle, Grinder, Scale, Timer, Mug",
      grind: "Medium-Fine Grind with 20 grams of powder for 120ml of water.",
      prep1:
        "Fill the bottom chamber of the Moka pot with water up to the safety valve.",
      prep2:
        "Add coffee grounds to the filter basket and level it off without tamping.",
      prep3:
        "Assemble the Moka pot and place it on medium heat. Once the coffee starts to fill the upper chamber, remove from heat and serve.",
      mistake1: "Too fine grind → clogging",
      mistake2: "Overfilling water → weak coffee",
      mistake3: "Using high heat → burnt taste.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTools = tools.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalTools - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalTools - 1 ? 0 : prev + 1));
  };

  return (
    <main className="bg-pearl text-midnight">
      <Header
        title="Brewing 101"
        tagline="Get your Coffee right"
        userClass="bg-pearl text-midnight syne-600"
      ></Header>
      <div className="flex items-center  justify-center space-x-5">
        <button
          onClick={handlePrev}
          className="text-midnight cursor-pointer p-2 bg-amber-100/70 rounded-r-4xl lg:bg-transparent lg:hover:shadow-2xl lg:shadow-black lg:scale-125 lg:p-5 transition-all ease-in-out duration-400"
        >
          ←
        </button>

        <Tools {...tools[currentIndex]} />
        <button
          onClick={handleNext}
          className="text-midnight cursor-pointer p-2 bg-amber-100/70 rounded-l-4xl lg:bg-transparent lg:hover:shadow-2xl lg:shadow-black lg:scale-125 lg:p-5 transition-all ease-in-out duration-400"
        >
          →
        </button>
      </div>
    </main>
  );
};

export default Brewing;
