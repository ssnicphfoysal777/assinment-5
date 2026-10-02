
import { use, type Dispatch, type SetStateAction,  } from "react";
import type { Technology } from "../Typs/Technologies";
import Tc from "./Tc";

const Tech = ({
  TechPromise,
  setSelectedTech,
}: {
  TechPromise: Promise<Technology[]>;
  setSelectedTech: Dispatch<SetStateAction<Technology[]>>;
}) => {

  const allTech = use(TechPromise);

  return (
    <div className="col-span-3">

      {/* Heading */}
      <div className="text-left mb-6">

        <h1 className="text-3xl font-bold ">
          Explore the<span className="bg-linear-to-r from-Tc-2 to-Tc-1 bg-clip-text text-transparent"> Technologies
            </span>
        </h1>

        <p className="text-[10px] text-gray-400 mt-1">
          Pick one technology category to build your ideal stack.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-2">

        {allTech.map((technology) => (
          <Tc
  key={technology.id}
  technology={technology}
  setSelectedTech={setSelectedTech}
/>
        ))}

      </div>

    </div>
  );
};

export default Tech;



// import { use } from "react";
// import type { Technology } from "../Typs/Technologies";

// const Tech = ({TechPromise}:{TechPromise:Promise<Technology[]>}) => {
//     const allTech= use(TechPromise)
//     console.log(allTech)
    
//     return (
//         <div className="col-span-3 grid grid-cols-3 gap-5">
          
//         </div>
//     );
// };

// export default Tech;