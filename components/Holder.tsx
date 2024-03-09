"use client";
import Image from "next/image";
import "./button.css";
import { Button } from "@/components/ui/button";
import React from "react";
import { Chapter } from "./common/Chapter";
export const Holder = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <div>
      Holder
      <Chapter
        text="👩‍💻 나"
        text2="(Holder)"
        desc="필요한 정보만 드러내기 (Present)"
      />
      <br />
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8 mr-8"
        onClick={() => setStep("issue")}
      >
        ← PREV STEP
      </Button>
      <Button
        className="blinking text-2xl font-bold bg-slate-700 mt-8"
        onClick={() => setStep("verify")}
      >
        ➔ NEXT STEP
      </Button>
    </div>
  );
};
