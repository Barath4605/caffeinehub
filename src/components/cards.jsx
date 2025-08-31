import "../index.css";
import Card from "./ui/comet-card";
const Cards = ({ title, p1, p2, p3, src, alt, desc }) => {
  const paraClass =
    "w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-green-800/30 rounded-x-xl";
  return (
    <section className="p-5 cursor-pointer bg-almond-cream evergreen">
      <h1 className="text-5xl lato-bold evergreen my-3 ">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-fit">
          {/* How It is Made */}
          <p className={paraClass}>{p1}</p>
          {/* Taste and Feel */}
          <p className={paraClass}>{p2}</p>
          {/* How it is Used */}
          <p className={paraClass}>{p3}</p>
        </div>
        <Card translateDepth={4} rotateDepth={5}>
          <img
            className="w-[350px] h-[350px] object-cover p-2 rounded-2xl"
            src={src}
            alt={alt}
          />
          <p className="m-1 p-1 text-lg evergreen lato-regular text-center">
            {desc}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Cards;
