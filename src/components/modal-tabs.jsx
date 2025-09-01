const ModalTabs = () => {
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
    <section className="w-fit overflow-scroll border-b border-green-700/40">
      {buttons.map((btn) => {
        return (
          <button className="p-1 mx-2 montserrat border-b border-transparent hover:border-green-700 transition-all ease-in-out duration-300">
            {btn.btnName}
          </button>
        );
      })}
    </section>
  );
};

export default ModalTabs;
