"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HOLDER } from "@/const/status";
import { Chapter } from "./common/Chapter";
import { Explain } from "./common/Explain";

export const Verifier = ({ setStep }: { setStep: (state: string) => void }) => {
  const verifyPresent = async () => {};
  return (
    <div>
      <Chapter
        text="📲 과외 플랫폼"
        text2="(Verifier)"
        desc="자격증 정보 입증하기"
      />
      <br />
      <Explain description="VP를 만들어서 과외플랫폼에 제출했어요. 이제 플랫폼은 이 증명서를 입증해야 해요. 서명이 변경되거나 VP가 조작된 것이라면 분명 문제가 생기겠죠." />
      <Button onClick={verifyPresent} className={`mr-4 mb-8 `}>
        입증하기 (verify)
      </Button>
      <Button className={`mr-4 mb-8 `}>코드보기</Button>
      <br />

      <Button
        className="blinking text-base font-bold bg-slate-700 mt-8"
        onClick={() => setStep(HOLDER)}
      >
        ← PREV STEP
      </Button>
    </div>
  );
};
