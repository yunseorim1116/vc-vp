"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { sdDatas } from "@/datas/claims";
import JsonFormatter from "react-json-formatter";
import Link from "next/link";
import { Explain } from "./common/Explain";
import "./button.css";
import { Chapter } from "./common/Chapter";
import { Content } from "./common/Content";
import { Skip } from "./common/Skip";
import { jsonStyle } from "@/const/style";
import { HOLDER } from "@/const/status";
import { DialogDemo } from "./common/DialogDemo";
import CredentialCode from "@/components/mdx/credential.mdx";
import { useTranslation } from "@/app/i18n/client";
import { TFunction } from "i18next";

export const Credential = ({
  setStep,
  lng,
}: {
  setStep: (state: string) => void;
  lng: string;
}) => {
  const { t } = useTranslation(lng);
  const [credential, setCredential] = useState(); //token
  const [claims, setClaims] = useState(); //content
  const [isCompleteEncode, setIsCompleteEncode] = useState(false);

  const STEP2 = credential && !isCompleteEncode;
  const createCredential = async () => {
    const { data } = await axios.get(`/api/credential`);
    const credential = data.credential;
    setCredential(credential);
  };

  const getClaims = async () => {
    const { data } = await axios.post(`/api/encode`, {
      token: credential,
    });

    const claims = data.claims;
    setClaims(claims);
    setIsCompleteEncode(true);
  };

  return (
    <>
      <Chapter text={t("school")} text2="(Issuer)" desc={t("chapter1")} />

      <Explain description={t("credentailDesc1")} />
      <Button
        onClick={createCredential}
        className={`mr-4 mb-8 ${credential ? "" : "blinking"}`}
      >
        {t("letsIssue")}
      </Button>

      <DialogDemo>
        <CredentialCode />
      </DialogDemo>

      {/* step1 */}
      <CredentialStep1 credential={credential} t={t} />

      {/* step2 */}
      <CredentialStep2 STEP2={STEP2} getClaims={getClaims} t={t} />

      {/* step3 */}
      <CredentialStep3
        credential={credential}
        isCompleteEncode={isCompleteEncode}
        claims={claims}
        setStep={setStep}
        t={t}
      />

      {!credential && (
        <div className="flex justify-end">
          <Skip setStep={setStep} status={HOLDER} />
        </div>
      )}
    </>
  );
};

interface CredentialStepProps {
  credential: string | undefined;
  t: TFunction<any, undefined>;
}

const CredentialStep1 = ({ credential, t }: CredentialStepProps) => (
  <>
    {credential ? (
      <Content>{credential}</Content>
    ) : (
      <Content>
        <p className="text-gray-500 mb-4">{t("issue")}</p>
      </Content>
    )}
    <Explain description={t("credentailDesc1")} />
  </>
);
interface CredentialStep2Props {
  STEP2: boolean | undefined;
  getClaims: () => Promise<void>;
  t: TFunction<any, undefined>;
}

const CredentialStep2 = ({ STEP2, getClaims, t }: CredentialStep2Props) => (
  <>
    {STEP2 && (
      <Button onClick={getClaims} className="blinking mb-8">
        {t("getClaims")} /
      </Button>
    )}
  </>
);
interface CredentialStep3Props {
  credential: string | undefined;
  isCompleteEncode: boolean;
  claims: string | undefined;
  setStep: (state: string) => void;
  t: TFunction<any, undefined>;
}
export const CredentialStep3 = ({
  credential,
  isCompleteEncode,
  claims,
  setStep,
  t,
}: CredentialStep3Props) => {
  return (
    <>
      {credential && isCompleteEncode && (
        <>
          <Button className="mb-8"> Done!</Button>
          <Content>
            <div className="max-w-500 flex p-8mb-4 mt-4overflow-scroll">
              <div className="w-1/2 ">
                <Link href="https://www.sdjwt.co/" className="font-bold mb-4">
                  {t("link1")}
                </Link>

                <JsonFormatter
                  json={claims}
                  tabWith={4}
                  jsonStyle={jsonStyle}
                />
              </div>
              <div className="w-1/2 ">
                <Link href="https://jwt.io/" className="font-bold mb-4">
                  {t("link2")}
                </Link>

                <JsonFormatter
                  json={sdDatas}
                  tabWith={5}
                  jsonStyle={jsonStyle}
                />
              </div>
            </div>
          </Content>

          <Explain description={t("credentailDesc3")} />

          <p className="text-xl font-bold  mb-4">[ ✔️ ] Mission1 Complete !</p>
          <p>
            {t("complete")}
            <br />
            {t("thisIsVc")}
          </p>
          <Button
            className="blinking text-2xl font-bold bg-slate-700 mt-8"
            onClick={() => setStep(HOLDER)}
          >
            ➔ NEXT STEP
          </Button>
        </>
      )}
    </>
  );
};
