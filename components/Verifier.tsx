"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { HOLDER } from "@/const/status";
import { Chapter } from "./common/Chapter";
import { Explain } from "./common/Explain";
import VerifyerCode from "@/components/mdx/verifyer.mdx";
import { DialogDemo } from "./common/DialogDemo";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Badge } from "@/components/ui/badge";
import Script from "next/script";
import JSConfetti from "js-confetti";

export const Verifier = ({ setStep }: { setStep: (state: string) => void }) => {
  const [verify, setVerify] = useState(false);
  const { toast } = useToast();
  const formattedDate = new Date().toLocaleString();
  const jsConfetti = new JSConfetti();

  const verifyPresent = async () => {
    setVerify(true);
    toast({
      title: "입증이 완료 되었어요!",
      description: `Verification completed on ${formattedDate}`,
    });
  };

  return (
    <div>
      <Chapter
        text="📲 과외 플랫폼"
        text2="(Verifier)"
        desc="자격증 정보 입증하기"
      />
      <br />
      <Explain
        description="VP를 만들어서 과외플랫폼에 제출했어요. 이제 플랫폼은 이 증명서를 입증해야 해요. 
      서명이 변경되거나 VP가 조작된 것이라면 분명 문제가 생기겠죠. 과외 플랫폼은 이제 VP를 인증할거예요."
      />
      <Button
        onClick={verifyPresent}
        className={`mr-4 mb-8 ${verify ? "" : "blinking"}`}
      >
        입증하기 (verify)
      </Button>

      <DialogDemo>
        <VerifyerCode />
      </DialogDemo>
      <Toaster />
      <br />

      {verify && (
        <>
          <Script
            src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"
            strategy="lazyOnload"
            onLoad={() => jsConfetti.addConfetti()}
          />
          <Badge variant="destructive" className="text-xl">
            인증 완료
          </Badge>
          <Explain description="입증이 완료 되었어요! 플랫폼 측에서는 필요로 하는 요소(requiredClaims)을 넣고 조작된 토큰인지 아닌지를 검증해요. 모든 스텝을 완료했습니다. 축하합니다!" />
          <Button
            className="text-base font-bold bg-slate-700 mt-8"
            onClick={() => setStep(HOLDER)}
          >
            ← PREV STEP
          </Button>
        </>
      )}
    </div>
  );
};
