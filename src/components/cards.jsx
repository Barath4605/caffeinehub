import "../index.css";
const Cards = ({ title, p1, p2, p3, src, alt, desc }) => {
  const paraClass =
    "w-[60%] text-justify lato-regular text-lg pl-2 border-l-1 border-green-800/70 rounded-x-xl";
  return (
    <section className="p-5 cursor-pointer bg-almond-cream evergreen hover:scale-[1.01] hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.1),_0_10px_10px_rgba(0,0,0,0.04)] transition-all ease-in-out duration-500">
      <h1 className="text-5xl lato-bold evergreen my-3 ">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-fit">
          <p className={paraClass}>{p1}</p>
          <p className={paraClass}>{p2}</p>
          <p className={paraClass}>{p3}</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
