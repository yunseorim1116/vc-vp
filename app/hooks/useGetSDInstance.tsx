import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getSDjwtInstance = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/sdjwt", {
      headers: { method: "GET" },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const useGetSDInstance = () => {
  const { data: instance } = useQuery({
    queryKey: ["getInstance"],
    queryFn: getSDjwtInstance,
  });

  return instance;
};
