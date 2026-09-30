import type { Technology } from "../Typs/Technologies";

const Tc = ({ technology }: { technology: Technology }) => {

  const badgeColor =
    technology.badge === "Popular"
      ? "bg-blue-50 text-blue-500"
      : technology.badge === "Fast"
      ? "bg-orange-50 text-orange-500"
      : technology.badge === "Cache"
      ? "bg-red-50 text-red-500"
      : technology.badge === "Top SQL"
      ? "bg-blue-50 text-blue-600"
      : technology.badge === "Ubiquitous"
      ? "bg-yellow-50 text-yellow-600"
      : "bg-green-50 text-green-600";

  return (
    <div className="border border-gray-200 rounded-xl p-2 bg-white">

      {/* Image + Badge */}
      <div className="flex justify-between items-center">

        <img
          src={technology.image}
          alt={technology.name}
          className="w-6 h-6"
        />

        <span
          className={`text-[8px] px-2 py-1 rounded-full ${badgeColor}`}
        >
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="text-[12px] font-semibold mt-3">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-[8px] text-gray-500 leading-3 mt-2 min-h-[36px]">
        {technology.description}
      </p>

      {/* Type + Level + Rating */}
      <div className="flex justify-between items-center mt-3 text-[7px]">

        <span className="bg-gray-100 px-2 py-1 rounded">
          {technology.type}
        </span>

        <span className="text-gray-500">
          {technology.level}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button className="w-full bg-gray-950 text-white text-[8px] py-2 rounded-md mt-3">
        Add to Stack
      </button>

    </div>
  );
};

export default Tc;