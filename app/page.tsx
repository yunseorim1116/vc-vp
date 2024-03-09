"use client";

import { Credential } from "@/components/Credential";
import { Description } from "@/components/Description";
import { Holder } from "@/components/Holder";
import { Present } from "@/components/Present";
import { useState } from "react";

export default function asyncHome() {
  const [step, setStep] = useState("issue");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-24 w-[48rem]">
        <Description step={step} />
        {step === "issue" && <Credential setStep={setStep} />}
        {step === "holder" && <Holder setStep={setStep} />}
        {step === "present" && <Present setStep={setStep} />}
      </div>
    </main>
  );
}
