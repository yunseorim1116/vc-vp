"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export const Credential = () => {
  const [credential, setCredential] = useState();
  const [claims, setClaims] = useState();

  const createCredential = async () => {
    const { data } = await axios.get("http://localhost:3000/api/credential");
    const credential = data.credential;
    setCredential(credential);
  };

  const getClaims = async () => {
    const { data } = await axios.get("http://localhost:3000/api/encode");
    const claims = data.claims;
    console.log(claims);
    setClaims(claims);
  };

  return (
    <div className="mt-24">
      <h1 className="text-6xl font-bold pb-4 ">
        학교<span className="text-4xl font-bold">(Issuer)</span>
      </h1>
      <h2 className="text-2xl font-bold pb-4">
        재학 증명서 발급해보기 (Credential)
      </h2>

      <Button onClick={createCredential} className="mr-4 mb-8">
        발급하기 (issue)
      </Button>
      <Button>issue 코드보기</Button>

      <div className="max-w-500 flex flex-wrap pb-8 border rounded-md p-4 mb-4">
        <p className="break-all">{credential}</p>
      </div>

      <div className="max-w-500 flex flex-wrap pb-8">
        <p className="break-all">
          issue 함수를 실행시키면 VC가 발급이 돼요. 그렇다면 발급하기 버튼을
          누를때마다 계속해서 토큰이 변경되는 이유는 무엇일까요? <br />
          바로 내부적으로 salt 값을 넣어 hash 함수를 돌리고 있기 때문입니다.
        </p>
        <p className="text-xl font-bold pt-4">
          우리는 방금 VC, 재학 증명서를 발급했어요!
        </p>
      </div>

      {credential && <Button onClick={getClaims}>토큰 풀어보기 </Button>}

      <div>{claims && JSON.stringify(claims)}</div>
    </div>
  );
};
