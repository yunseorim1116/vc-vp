import React from "react";
import { Badge } from "@/components/ui/badge";
import { HOLDER } from "@/const/status";

export const Skip = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <>
      <div className="flex justify-end">
        <Badge
          variant="secondary"
          className="cursor-pointer p-2 mt-8"
          onClick={() => setStep(HOLDER)}
        >
          ➔ You Can Skip it!
        </Badge>
      </div>

      <br />
    </>
  );
};
