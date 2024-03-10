"use client";
import Image from "next/image";
import "./button.css";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Chapter } from "./common/Chapter";
import { Explain } from "./common/Explain";
import axios from "axios";
import { Content } from "./common/Content";

export const Holder = ({ setStep }: { setStep: (state: string) => void }) => {
  const [preset, setPresent] = useState();

  const createPresent = async () => {
    const { data } = await axios.get("http://localhost:3000/api/present");

    const { presentation } = data;
    setPresent(presentation);
  };
  return (
    <div>
      <Chapter
        text="👩‍💻 나"
        text2="(Holder)"
        desc="필요한 정보만 드러내기 (Present)"
      />
      <br />
      <Explain
        description="학교측에서 재학증명서(VC) 를 발급해줬어요! 하지만 공개하고 싶지 않은 정보들이 있어요. 
      VC에 공개된 정보 중 공개하고 싶은 것만 내가 스스로 선택해서 과외 플랫폼에 제출할래요. VC를 이용해서 우리는 이제 VP를 만들거예요.
      생각해보니 firstname 과 id는 공개해도 될 것 같아요. ssn은 여전히 공개하고 싶지 않아요."
      />
      <Button onClick={createPresent} className="mr-4 mb-8">
        발급하기 (present)
      </Button>
      <Button>present 코드보기</Button>
      <br />

      {preset ? (
        <>
          <Content>{preset}</Content>
          <Explain description="present 함수를 실행시키면 VC 기반으로 VP가 발급 돼요. 토큰을 풀어볼까요?" />
          <Button> 토큰 풀어보기</Button>
        </>
      ) : (
        <Content>
          <p className="text-gray-500 mb-4">증명서를 발급해주세요.</p>
        </Content>
      )}

      <div>
        <Button
          className="blinking text-2xl font-bold bg-slate-700 mt-8 mr-8"
          onClick={() => setStep("issue")}
        >
          ← PREV STEP
        </Button>
        <Button
          className="blinking text-2xl font-bold bg-slate-700 mt-8"
          onClick={() => setStep("verify")}
        >
          ➔ NEXT STEP
        </Button>
      </div>
    </div>
  );
};
