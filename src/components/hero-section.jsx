import { useState } from "react";
import "../index.css";

const HeroSection = () => {
  const HeroMessage = [
    "This is a paradise for coffee. From brewing tips to the latest coffee trends, we have it all. Whether you're a seasoned barista or a casual coffee drinker, you'll find something to enjoy here. Get ready to dive into the rich and aromatic universe of caffeine!",
    "We cover all about making Coffee from instant coffee to the most complex espresso machines. Our content is designed to cater to all levels of coffee enthusiasts, from beginners to experts. Whether you're looking for quick brewing tips or in-depth guides on advanced techniques, we've got you covered.",
    "We cover all the basics and intermediate talks about brewing, how each machine and equipment is used, and how to get the best out of your coffee experience. From espresso machines to pour-over setups, we have you covered.",
    "We also delve into the world of coffee beans, exploring different origins, flavors, and roasting techniques. Learn about the nuances of single-origin beans and how they can elevate your coffee experience.",
    "Also help you pick the best products in the market with the help of our staffs and experts. We provide detailed reviews and recommendations for coffee equipment, beans, and accessories to help you make informed choices.",
  ];

  const [Index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % HeroMessage.length);
  };

  return (
    <main className="p-1 px-5 w-[30%] bg-white/80 backdrop-blur-3xl backdrop-brightness-110 rounded-r-full -translate-x-4 hover:translate-x-0 transition-all ease-in-out duration-500">
      <div className="p-2">
        <h3 className="text-5xl p-1 montserrat mb-4 font-extrabold coffee-brown-300 w-fit">
          What to expect ?
        </h3>
        <hr className="w-[30%] my-5 coffee-brown-400" />
        <div className="h-fit">
          <p
            className="cursor-pointer text-xl mt-5 text-justify font-bold lato-bold coffee-brown-400 pr-3 box-decoration-clone leading-relaxed transition-all ease-out duration-200"
            onClick={handleNext}
          >
            {HeroMessage[Index]}
          </p>
        </div>
        <br />
        <div>
          <p className="flex items-end">
            {HeroMessage.map((message, index) => {
              return (
                <span
                  onClick={() => setIndex(index)}
                  key={index}
                  className={`cursor-pointer px-2 py-1 mr-2 mb-2 transition-all ease-out duration-400 font-semibold ${
                    index === Index
                      ? "scale-105 border-b coffee-brown-200 bg-amber-900/20"
                      : "text-sm coffee-brown-100 hover:coffee-brown-200"
                  }`}
                >
                  {index + 1}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
