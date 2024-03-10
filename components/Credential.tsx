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

export const Credential = ({
  setStep,
}: {
  setStep: (state: string) => void;
}) => {
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
      <Chapter
        text="🏫 학교"
        text2="(Issuer)"
        desc="재학 증명서 발급해보기 (Credential)"
      />

      <Explain
        description="우리는 학교측에 대학 증명서를 발급해달라 요청했어요. 이제 학교(Issuer) 는 증명서를 발급할거예요. 
      학교측은 [ firstname, id, ssn ] 에 대해 드러낼 수 있는지, 없는지를 허락해줬다고 가정할게요."
      />
      <Button
        onClick={createCredential}
        className={`mr-4 mb-8 ${credential ? "" : "blinking"}`}
      >
        발급하기 (issue)
      </Button>

      <DialogDemo>
        <CredentialCode />
      </DialogDemo>

      {/* step1 */}
      <CredentialStep1 credential={credential} />

      {/* step2 */}
      <CredentialStep2 STEP2={STEP2} getClaims={getClaims} />

      {/* step3 */}
      <CredentialStep3
        credential={credential}
        isCompleteEncode={isCompleteEncode}
        claims={claims}
        setStep={setStep}
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
}

const CredentialStep1 = ({ credential }: CredentialStepProps) => (
  <>
    {credential ? (
      <Content>{credential}</Content>
    ) : (
      <Content>
        <p className="text-gray-500 mb-4">증명서를 발급해주세요.</p>
      </Content>
    )}
    <Explain
      description="issue 함수를 실행시키면 VC가
  발급이 돼요. 그렇다면 발급하기 버튼을 누를때마다 계속해서 토큰이
  변경되는 이유는 무엇일까요? 
  바로 내부적으로 salt 값을 넣고 hash 함수를 돌려 발급할때마다 새로운
  값을 생성하기 때문입니다."
    />
  </>
);
interface CredentialStep2Props {
  STEP2: boolean | undefined;
  getClaims: () => Promise<void>;
}

const CredentialStep2 = ({ STEP2, getClaims }: CredentialStep2Props) => (
  <>
    {STEP2 && (
      <Button onClick={getClaims} className="mb-8">
        토큰 풀어보기 (get Claims)
      </Button>
    )}
  </>
);
interface CredentialStep3Props {
  credential: string | undefined;
  isCompleteEncode: boolean;
  claims: string | undefined;
  setStep: (state: string) => void;
}
export const CredentialStep3 = ({
  credential,
  isCompleteEncode,
  claims,
  setStep,
}: CredentialStep3Props) => {
  return (
    <>
      {credential && isCompleteEncode && (
        <>
          <Button className="mb-8"> 완료!</Button>
          <Content>
            <div className="max-w-500 flex p-8mb-4 mt-4overflow-scroll">
              <div className="w-1/2 ">
                <Link href="https://www.sdjwt.co/" className="font-bold mb-4">
                  (링크) sd-jwt 디버깅 사이트를 통해 decode 한 값
                </Link>

                <JsonFormatter
                  json={claims}
                  tabWith={4}
                  jsonStyle={jsonStyle}
                />
              </div>
              <div className="w-1/2 ">
                <Link href="https://jwt.io/" className="font-bold mb-4">
                  (링크) jwt 디버깅 사이트를 통해 decode 한 값
                </Link>

                <JsonFormatter
                  json={sdDatas}
                  tabWith={5}
                  jsonStyle={jsonStyle}
                />
              </div>
            </div>
          </Content>

          <Explain
            description="토큰을 받아 sd-jwt와 jwt 디버깅 사이트에서 decode 해보았어요.
      이처럼 우리가 흔히 알고있는 encode 함수를 돌리면 오른쪽처럼 프레임이 숨겨진 것을 볼 수 있어요. 왼쪽 encode 상태를 보면 원본 객체가 그대로 드러나고 있어요. 
      중요한 것은 우리는 숨길 수 있다고 명시한 것 뿐이지, 완전히 숨긴 것은 아니에요."
          />

          <p className="text-xl font-bold  mb-4">[ ✔️ ] Mission1 Complete !</p>
          <p>
            학교는 방금 재학 증명서를 발급을 완료했어요.
            <br />
            이것이 바로 VC입니다.
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
