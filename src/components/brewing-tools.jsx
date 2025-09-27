const BrewTools = ({
  title,
  tagline,
  imgSrc,
  equipments,
  grind,
  prep1,
  prep2,
  prep3,
  mistake1,
  mistake2,
  mistake3,
}) => {
  return (
    <section className="lg:p-5 text-center lg:m-10">
      <h2 className=" lg:text-7xl text-5xl italiana">{title}</h2>
      <p className=" ubuntu-medium font-bold lg:px-5 px-3 text-sm">{tagline}</p>
      <img
        className="mx-auto mt-5 w-[350px] h-fit object-center"
        src={imgSrc}
        alt={`Image of ${title}`}
      />
      <div className="p-3 lg:flex text-left space-x-5 montserrat justify-between border-t">
        <div className="flex-1">
          <h3 className="font-bold text-2xl">Equipments Needed </h3>
          <p className="text-md">{equipments}</p>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-2xl">Grind and Amount</h3>
          <p>{grind}</p>
        </div>

        <div className="flex-1 text-justify">
          <h3 className="font-bold text-2xl">Preparation</h3>
          <ol className="list-decimal ml-3 lg:ml-0">
            <li className="mb-1">{prep1}</li>
            <li className="mb-1">{prep2}</li>
            <li className="mb-1">{prep3}</li>
          </ol>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-2xl">Common Mistakes</h3>
          <ul>
            <li>{mistake1}</li>
            <li>{mistake2}</li>
            <li>{mistake3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrewTools;
