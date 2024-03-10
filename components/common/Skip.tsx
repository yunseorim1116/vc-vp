import React from "react";
import { Badge } from "@/components/ui/badge";

export const Skip = ({
  setStep,
  status,
}: {
  setStep: (state: string) => void;
  status: string;
}) => {
  return (
    <>
      <div className="flex justify-end">
        <Badge
          variant="secondary"
          className="cursor-pointer p-2 mt-8"
          onClick={() => setStep(status)}
        >
          ➔ You Can Skip it!
        </Badge>
      </div>

      <br />
    </>
  );
};
