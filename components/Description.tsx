import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ISSUE, VERIFY, HOLDER } from "@/const/status";
import { useTranslation } from "@/app/i18n/client";

const isMission1Complete = (step: string) => step === HOLDER || step === VERIFY;
const isMission2Complete = (step: string) => step !== HOLDER && step !== ISSUE;

export const Description = ({ step, lng }: { step: string; lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <Alert className="bg-slate-50">
      <AlertTitle className="text-2xl font-bold">📜 Scenarios</AlertTitle>
      <AlertDescription className="text-base mt-4">
        {t("description")}
        <br />
        <br />
        <p>
          <span className="font-bold">
            {isMission1Complete(step) ? "[ ✔️ ]" : "[ ]"} Mission:
          </span>
          {t("mission1")}
        </p>
        <p>
          <span className="font-bold">
            {isMission2Complete(step) ? "[ ✔️ ]" : "[  ]"} Mission:
          </span>
          {t("mission2")}
        </p>
      </AlertDescription>
    </Alert>
  );
};
