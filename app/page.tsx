"use client";

import { Credential } from "@/components/Credential";
import { Description } from "@/components/Description";
import { Holder } from "@/components/Holder";
import { Loading } from "@/components/common/Loading";
import { useState } from "react";
import { Verifier } from "@/components/Verifier";
import Image from "next/image";

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
      case "verify":
        return <Verifier setStep={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="mt-24 w-[48rem]">
        <div className="flex justify-center items-center mb-8 pr-5">
          <Image
            src="/삼.png"
            layout="intrinsic"
            alt="sd-vc-concept"
            width={570} //이미지 원본크기
            height={381}
          />
        </div>
        <Description step={step} />
        {loading ? <Loading /> : <>{renderStepComponent()}</>}
      </div>
    </main>
  );
}
