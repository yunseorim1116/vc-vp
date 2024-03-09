"use client";
import React, { useState } from "react";
import { useGetSDInstance } from "@/app/hooks/useGetSDInstance";

export const TestComponent = ({ children }: any) => {
  const instance = useGetSDInstance();
  console.log(instance);

  return <div></div>;
};
