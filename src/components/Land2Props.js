import React from "react";
const Land2Props = ({icon , header , text}) => {
  return (
    <div className="flex flex-col bg-slate-300 dark:bg-slate-600 w-48 rounded-lg h-48 items-center justify-center gap-y-3">
      <h1 className="dark:text-violet-400 text-violet-500 text-3xl">{icon}</h1>
      <p className="dark:text-white text-violet-500 font-bold text-xl">{header}</p>
      <p className="dark:text-white text-violet-500">{text}</p>
    </div>
  );
};

export default Land2Props;
