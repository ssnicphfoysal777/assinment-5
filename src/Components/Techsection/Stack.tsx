import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../Typs/Technologies";


const Stack = ({
  selectedTech,
  setSelectedTech,
}: {
  selectedTech: Technology[];
  setSelectedTech: Dispatch<SetStateAction<Technology[]>>;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-3 h-fit mt-[76px]">

      <h2 className="text-[12px] font-semibold">
        Your Stack
      </h2>

      {selectedTech.length === 0 ? (
        <>
          <p className="text-[8px] text-gray-400 mt-1">
            No technologies selected yet.
          </p>

          <div className="border border-gray-100 rounded-lg mt-4 p-5 text-center">
            <p className="text-[8px] text-gray-300">
              Your stack is empty.
            </p>
          </div>
        </>
      ) : (
        <div className="mt-4 space-y-2">
          {selectedTech.map((tech) => (
            <div
              key={tech.id}
              className="border border-gray-100 rounded-lg p-2 flex items-center gap-2"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-5 h-5"
              />

              <span className="text-[9px] font-medium">
                {tech.name}
              </span>
              <button
  onClick={() =>
    setSelectedTech((prev) =>
      prev.filter((item) => item.id !== tech.id)
    )
  }
  className="ml-auto text-[8px] text-red-500"
>
  Delete
</button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Stack;