import { useEffect, useState } from "react";
import "./index.css";

const fonts = [
  "playwrite text-2xl",
  "manrope text-2xl",
  "montserrat text-2xl",
  "playwrite text-2xl",
  "bodoni text-2xl",
  "pinyon-script text-4xl",
  "vibes text-4xl",
];

const Beans = () => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-midnight text-pearl flex flex-col relative">
      <div className={`h-screen w-screen m-auto ${fonts[fontIndex]}`}>
        <h1
          className={`font-medium w-screen h-screen content-center text-center `}
        >
          [ roasting the beans ]
        </h1>
      </div>

      <div className="text-sm absolute bottom-0 ">
        <h1>site under prodcution*</h1>
      </div>
    </main>
  );
};

export default Beans;
