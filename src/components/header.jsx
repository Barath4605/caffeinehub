import "../index.css";

const CommonHeader = ({ title, tagline, userClass }) => {
  return (
    <div className={`p-5 ${userClass} text-center`}>
      <h2 className="text-7xl font-bold">{title}</h2>
      <p className="text-md md:text-lg m-1 font-semibold">{tagline}</p>
    </div>
  );
};

export default CommonHeader;
