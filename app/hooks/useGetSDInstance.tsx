"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getCredential = async () => {
  try {
    const res = await axios.get(`/api/credential`, {
      headers: { method: "GET" },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const useGetSDInstance = () => {
  const { data: instance } = useQuery({
    queryKey: ["credential"],
    queryFn: getCredential,
  });

  console.log(instance);

  return instance;
};
