"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { sdDatas } from "@/datas/claims";
import JsonFormatter from "react-json-formatter";
import Link from "next/link";
import { Explain } from "./common/Explain";
import "./button.css";

export const Credential = () => {
  const [credential, setCredential] = useState();
  const [claims, setClaims] = useState();
  const [isCompleteEncode, setIsCompleteEncode] = useState(false);

  const createCredential = async () => {
    const { data } = await axios.get("http://localhost:3000/api/credential");
    const credential = data.credential;
    setCredential(credential);
  };

  const getClaims = async () => {
    const { data } = await axios.get("http://localhost:3000/api/encode");
    const claims = data.claims;
    setClaims(claims);
    setIsCompleteEncode(true);
  };

  return (
    <div className="mt-16">
      <h1 className="text-6xl font-bold pb-4 border-b-2 border-solid border-gray-200">
        🏫 학교<span className="text-4xl font-bold"> (Issuer)</span>
      </h1>
      <h2 className="text-2xl font-bold pb-4 mt-4">
        재학 증명서 발급해보기 (Credential)
      </h2>
      <Explain description="토큰을 받아 sd-jwt와 jwt 디버깅 사이트에서서 decode 해보았어요." />

      <Button onClick={createCredential} className="mr-4 mb-8">
        발급하기 (issue)
      </Button>
      <Button>issue 코드보기</Button>

      {/* step1 */}
      <CredentialStep1 credential={credential} />

      {/* step2 */}
      <CredentialStep2
        credential={credential}
        isCompleteEncode={isCompleteEncode}
        getClaims={getClaims}
      />
      {/* step3 */}
      <CredentialStep3
        credential={credential}
        isCompleteEncode={isCompleteEncode}
        claims={claims}
      />
      <p className="text-xl font-bold  mb-4">[ ✔️ ] Mission1 Complete !</p>
      <p>
        학교는 방금 재학 증명서를 발급을 완료했어요.
        <br />
        이것이 바로 VC입니다.
      </p>

      <Button className="blinking text-2xl font-bold bg-slate-700 mt-8">
        ➔ NEXT STEP
      </Button>
    </div>
  );
};

const jsonStyle = {
  propertyStyle: { color: "rgb(255 50 104)" },
  stringStyle: { color: "#0295d0" },
  numberStyle: { color: "darkorange" },
};

interface CredentialStepProps {
  credential: string | undefined;
}

const CredentialStep1 = ({ credential }: CredentialStepProps) => (
  <>
    <div className="max-w-500 flex flex-wrap pb-8 border rounded-md p-4 mb-4 bg-slate-50">
      {credential ? (
        <p className="break-all">{credential}</p>
      ) : (
        <p className="flex justify-center items-center text-gray-500 mt-4">
          증명서를 발급해주세요.
        </p>
      )}
    </div>
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
  credential: string | undefined;
  isCompleteEncode: boolean;
  getClaims: () => void;
}

const CredentialStep2 = ({
  credential,
  isCompleteEncode,
  getClaims,
}: CredentialStep2Props) => (
  <>
    {credential && !isCompleteEncode && (
      <Button onClick={getClaims} className="mb-8">
        토큰 풀어보기
      </Button>
    )}
  </>
);
interface CredentialStep3Props {
  credential: string | undefined;
  isCompleteEncode: boolean;
  claims: string | undefined;
}
export const CredentialStep3 = ({
  credential,
  isCompleteEncode,
  claims,
}: CredentialStep3Props) => {
  return (
    <>
      {credential && isCompleteEncode && (
        <>
          <Button> 완료!</Button>
          <div className="max-w-500 flex  pb-8  border rounded-md p-8 mb-4 mt-4 bg-slate-50 overflow-scroll">
            <div className="w-1/2 ">
              <Link href="https://www.sdjwt.co/" className="font-bold mb-4">
                (링크) sd-jwt 디버깅 사이트를 통해 decode 한 값
              </Link>

              <JsonFormatter json={claims} tabWith={4} jsonStyle={jsonStyle} />
            </div>
            <div className="w-1/2 ">
              <Link href="https://jwt.io/" className="font-bold mb-4">
                (링크) jwt 디버깅 사이트를 통해 decode 한 값
              </Link>

              <JsonFormatter json={sdDatas} tabWith={5} jsonStyle={jsonStyle} />
            </div>
          </div>
          <Explain
            description="토큰을 받아 sd-jwt와 jwt 디버깅 사이트에서 decode 해보았어요.
      이처럼 우리가 흔히 알고있는 encode 함수를 돌리면 오른쪽처럼 프레임이 숨겨진 것을 볼 수 있어요."
          />
        </>
      )}
    </>
  );
};
