"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export const Holder = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <div>
      Holder
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8 mr-8"
        onClick={() => setStep("issue")}
      >
        ← PREV STEP
      </Button>
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8"
        onClick={() => setStep("present")}
      >
        ➔ NEXT STEP
      </Button>
    </div>
  );
};
