import "../index.css";

const CommonHeader = ({ title, tagline }) => {
  return (
    <div className="p-5 almond-cream bg-evergreen text-center rounded-b-3xl rounded-t-3xl">
      <h2 className="text-7xl montserrat font-bold">{title}</h2>
      <p className="text-lg m-1 font-semibold lato-regular">{tagline}</p>
    </div>
  );
};

export default CommonHeader;
