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
import { useTranslation } from "@/app/i18n/client";

export const Verifier = ({
  setStep,
  lng,
}: {
  setStep: (state: string) => void;
  lng: string;
}) => {
  const { t } = useTranslation(lng);
  const [verify, setVerify] = useState(false);
  const { toast } = useToast();
  const formattedDate = new Date().toLocaleString();
  const jsConfetti = new JSConfetti();

  const verifyPresent = async () => {
    setVerify(true);
    toast({
      title: "complete!",
      description: `Verification completed on ${formattedDate}`,
    });
  };

  return (
    <div>
      <Chapter
        text={t("platform")}
        text2="(Verifier)"
        desc={t("provingYoutCredentials")}
      />
      <br />
      <Explain description={t("verifyDesc2")} />
      <Button
        onClick={verifyPresent}
        className={`mr-4 mb-8 ${verify ? "" : "blinking"}`}
      >
        {t("verify")}
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
            {t("verifyComplete")}
          </Badge>
          <Explain description={t("verifyDesc1")} />
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
