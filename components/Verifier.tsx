"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HOLDER } from "@/const/status";

export const Verifier = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <div>
      베리파이어
      <br />
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8"
        onClick={() => setStep(HOLDER)}
      >
        ← PREV STEP
      </Button>
    </div>
  );
};
