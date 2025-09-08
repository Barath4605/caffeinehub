import "../../index.css";
import { useCoffee } from "./coffeeContext.js";

const Ingredients = () => {
  const { prereqs = [], tools = [], endline = "" } = useCoffee();

  return (
    <article className="lg:p-3 p-1">
      <div className="lg:flex montserrat text-white lg:items-end items-center my-2 py-2 w-fit m-auto lg:m-0">
        <h2 className="text-4xl font-bold lg:px-3 py-1 border-b lg:border-b-0 lg:border-r w-fit border-white">
          Ingredients
        </h2>
        <h4 className="text-md font-md lg:px-3 w-fit m-auto lg:m-0">
          What you would require
        </h4>
      </div>
      <div className="p-5 text-center w-fit m-auto">
        {/* prerequisites  */}
        <ol className="lato font-md almond-cream list-disc pl-6">
          {prereqs.map((prereq, i) => (
            <li className="font-semibold lato" key={i}>
              {prereq}
            </li>
          ))}
        </ol>

        {/* tools */}
        <ul className="lato font-md almond-cream w-[70%] list-disc pl-6 mt-4">
          {tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>

        {/* endline */}
        <p className="mt-4">{endline}</p>
      </div>
    </article>
  );
};

export default Ingredients;
