import "../index.css";

const TypesModal = ({ open, close }) => {
  if (!open) return null;

  const pages = [
    {
      pg: 1,
      pgTitle: "Espresso",
      pgContent:
        "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans under high pressure. It is the base for many popular coffee drinks such as lattes, cappuccinos, and Americanos. Espresso is known for its strong flavor, rich aroma, and thick, creamy texture.",
    },
  ];
  const buttons = [
    {
      btnName: "About",
      icon: "x",
    },
    {
      btnName: "Ingredients",
      icon: "x",
    },
    {
      btnName: "How To Make",
      icon: "x",
    },
    {
      btnName: "Equipments",
      icon: "x",
    },
    {
      btnName: "Tastes Like ?",
      icon: "x",
    },
  ];

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-xl z-50"
      onClick={close}
    >
      <section
        className="bg-almond-cream evergreen p-2 flex flex-col w-[70%] m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {pages.map((page) => {
            return (
              <div className="flex items-center justify-between p-5">
                <h1 className="text-5xl montserrat font-bold my-3">
                  {page.pgTitle}
                </h1>
                <p className="text-lg lato-regular text-justify w-[75%]">
                  {page.pgContent}
                </p>
              </div>
            );
          })}
          <div className="mt-10">
            <section className="w-fit overflow-scroll border-b border-green-700/40">
              {buttons.map((btn) => {
                return (
                  <button className="p-1 px-2 cursor-pointer montserrat border-b border-transparent hover:border-green-700 transition-all ease-in-out duration-300">
                    {btn.btnName}
                  </button>
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypesModal;
