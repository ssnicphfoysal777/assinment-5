const Stack = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-3 h-fit mt-[76px]">

      <h2 className="text-[12px] font-semibold">
        Your Stack
      </h2>

      <p className="text-[8px] text-gray-400 mt-1">
        No technologies selected yet.
      </p>

      <div className="border border-gray-100 rounded-lg mt-4 p-5 text-center">
        <p className="text-[8px] text-gray-300">
          Your stack is empty.
        </p>
      </div>

    </div>
  );
};

export default Stack;