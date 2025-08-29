const Pagination = () => {
  const tabs = [
    {
      title: "About",
    },
    {
      title: "Ingredients",
    },
    {
      title: "How to Make",
    },
    {
      title: "Beginner Mistakes",
    },
  ];

  return (
    <div className="flex gap-4 mt-4 w-fit">
      {tabs.map((tab) => {
        return (
          <button className="p-1 cursor-pointer text-white hover:underline">
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
