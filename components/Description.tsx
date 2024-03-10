import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ISSUE, VERIFY, HOLDER } from "@/const/status";

const isMission1Complete = (step: string) => step === HOLDER || step === VERIFY;
const isMission2Complete = (step: string) => step !== HOLDER && step !== ISSUE;

export const Description = ({ step }: { step: string }) => {
  return (
    <Alert className="bg-slate-50">
      <AlertTitle className="text-2xl font-bold">📜 시나리오</AlertTitle>
      <AlertDescription className="text-base mt-4">
        나는 S대에 재학하는 학생입니다. 용돈이 부족해서 과외 플랫폼을 통해
        과외를 구하기로 했습니다.
        <br />
        <br />
        <p>
          <span className="font-bold">
            {isMission1Complete(step) ? "[ ✔️ ]" : "[ ]"} Mssion1 :
          </span>
          나는 학교를 상대로 재학 증명서를 받아내야 합니다.
        </p>
        <p>
          <span className="font-bold">
            {isMission2Complete(step) ? "[ ✔️ ]" : "[  ]"} Mssion2 :
          </span>
          받은 재학 증명서를 과외 플랫폼에 제출해야 합니다.
        </p>
      </AlertDescription>
    </Alert>
  );
};
