import React from "react";

export const Chapter = ({
  text,
  text2,
  desc,
}: {
  text: string;
  text2: string;
  desc: string;
}) => {
  return (
    <>
      <h1 className="mt-16 text-6xl font-bold pb-4 border-b-2 border-solid border-gray-200">
        {text}
        <span className="text-4xl font-bold"> {text2}</span>
      </h1>
      <h2 className="text-2xl font-bold pb-4 mt-4">{desc}</h2>
    </>
  );
};
