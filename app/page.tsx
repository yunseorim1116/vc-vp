"use client";

import { Credential } from "@/components/Credential";
import { Description } from "@/components/Description";
import { Holder } from "@/components/Holder";
import { Present } from "@/components/Present";
import { Loading } from "@/components/common/Loading";
import { useState } from "react";

export default function asyncHome() {
  const [step, setStep] = useState("issue");
  const [loading, setLoading] = useState(false);

  const handleNextStep = (step: string) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(step);
    }, 1000);
  };

  const renderStepComponent = () => {
    switch (step) {
      case "issue":
        return <Credential setStep={handleNextStep} />;
      case "holder":
        return <Holder setStep={handleNextStep} />;
      case "present":
        return <Present setStep={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-24 w-[48rem]">
        <Description step={step} />
        {loading ? <Loading /> : <>{renderStepComponent()}</>}
      </div>
    </main>
  );
}
