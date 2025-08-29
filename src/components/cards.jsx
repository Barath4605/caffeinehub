import "../index.css";
import Card from "./ui/comet-card";
const Cards = ({ title, p1, p2, p3, src, alt, desc }) => {
  const fullView = () => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="p-5 cursor-pointer" onClick={fullView}>
      <h1 className="text-3xl lato-bold brown-300 my-3">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-fit">
          {/* How It is Made */}
          <p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
            {p1}
          </p>
          {/* Taste and Feel */}
          <p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
            {p2}
          </p>
          {/* How it is Used */}
          <p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
            {p3}
          </p>
        </div>
        <Card translateDepth={4} rotateDepth={5}>
          <img
            className="w-[350px] h-[350px] object-cover p-2 rounded-2xl"
            src={src}
            alt={alt}
          />
          <p className="m-1 p-1 text-lg brown-100 lato-regular text-center">
            {desc}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Cards;
