import "../index.css";

const CardFullView = () => {
  return (
    <section className="w-screen h-screen bg-black flex">
      <div className="w-[80%] h-[70%] m-auto bg-white justify-center overflow-scroll rounded-2xl">
        <div className="flex p-5 items-end">
          <img
            className="w-[300px]"
            src="https://images.pexels.com/photos/4736557/pexels-photo-4736557.jpeg"
            alt="image of espresso"
          />
          <p className="text-xl lato text-justify my-3 pl-5">
            Espresso is a concentrated coffee beverage brewed by forcing a small
            amount of hot water through finely-ground coffee beans. It is known
            for its rich flavor, thick consistency, and layer of crema on top.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardFullView;
