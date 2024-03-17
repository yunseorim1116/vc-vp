"use client";
import React from "react";
import Image from "next/image";
import ".././button.css";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-40">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      />

      <div className="moving-image-container">
        <Image
          className="moving-image"
          src={`${process.env.PUBLIC_URL}/vc를든나.png`}
          alt="vc를든나."
          width={350}
          height={24}
        />
      </div>
    </div>
  );
};
