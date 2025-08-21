import { useState } from "react";
import "../index.css";

const HomepageModal = () => {
  const HeroMessage = [
    {
      title: "What this is about",
      content:
        "This is a paradise for coffee. From brewing tips to the latest coffee trends, we have it all. Whether you're a seasoned barista or a casual coffee drinker, you'll find something to enjoy here. Get ready to dive into the rich and aromatic universe of caffeine!",
    },
    {
      title: "Brewing for Everyone",
      content:
        "We cover all about making Coffee from instant coffee to the most complex espresso machines. Our content is designed to cater to all levels of coffee enthusiasts, from beginners to experts. Whether you're looking for quick brewing tips or in-depth guides on advanced techniques, we've got you covered.",
    },
    {
      title: "Machines & Techniques",
      content:
        "We cover all the basics and intermediate talks about brewing, how each machine and equipment is used, and how to get the best out of your coffee experience. From espresso machines to pour-over setups, we have you covered.",
    },
    {
      title: "The World of Beans",
      content:
        "We also delve into the world of coffee beans, exploring different origins, flavors, and roasting techniques. Learn about the nuances of single-origin beans and how they can elevate your coffee experience.",
    },
    {
      title: "Expert Recommendations",
      content:
        "Also help you pick the best products in the market with the help of our staffs and experts. We provide detailed reviews and recommendations for coffee equipment, beans, and accessories to help you make informed choices.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % HeroMessage.length);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 p-2 text-black bg-white font-semibold rounded cursor-pointer"
        >
          What to Expect ?
        </button>
      </div>

      <div className="absolute bottom-15 w-[30%] transition-all ease-initial duration-500">
        {isOpen && (
          <div className="flex flex-col bg-white p-4 rounded ">
            <div className="flex text-gray-900">
              <div
                onClick={handleNext}
                className="cursor-pointer transition-all duration-500 transform animate-fadeIn"
                key={Index}
              >
                <h3 className="font-bold text-lg">
                  {HeroMessage[Index].title}
                </h3>
                <hr className="w-1/4 my-1" />
                <p className="text-gray-800">{HeroMessage[Index].content}</p>
              </div>
              <div className="h-fit">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIndex(0);
                  }}
                  className="text-black rounded-full h-fit cursor-pointer p-1 transition-all ease-in-out duration-800"
                >
                  X
                </button>
              </div>
            </div>

            <div className="mt-4 flex space-x-1">
              {HeroMessage.map((message, index) => {
                return (
                  <span
                    onClick={() => setIndex(index)}
                    key={index}
                    className={`p-0.5 px-2 cursor-pointer ${
                      index == Index
                        ? "bg-gray-200 border-b border-black/50 scale-100"
                        : "text-gray-400"
                    } transition-all ease-out duration-300 scale-75`}
                  >
                    {index + 1}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomepageModal;
