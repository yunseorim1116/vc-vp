"use client";
import React from "react";
import { Button } from "@/components/ui/button";
export const Present = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <div>
      프레젠또
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8"
        onClick={() => setStep("holder")}
      >
        ← PREV STEP
      </Button>
    </div>
  );
};
