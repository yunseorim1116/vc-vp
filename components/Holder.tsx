"use client";

import "./button.css";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Chapter } from "./common/Chapter";
import { Explain } from "./common/Explain";
import axios from "axios";
import { Content } from "./common/Content";
import JsonFormatter from "react-json-formatter";
import { jsonStyle } from "@/const/style";
import { ISSUE, VERIFY } from "@/const/status";
import { Skip } from "./common/Skip";
import PresentaionCode from "@/components/mdx/presentaion.mdx";
import { DialogDemo } from "./common/DialogDemo";
export const Holder = ({ setStep }: { setStep: (state: string) => void }) => {
  const [presetation, setPresent] = useState(); //token
  const [claims, setClaims] = useState(); //content

  const createPresent = async () => {
    const { data } = await axios.get(`/api/present`);

    const { presentation } = data;
    setPresent(presentation);
  };

  const getClaims = async () => {
    const { data } = await axios.post(`/api/encode`, {
      token: presetation,
    });

    const claims = data.claims;
    setClaims(claims);
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
      생각해보니 이름(name)은 공개해도 될 것 같아요. 다른 정보는 여전히 공개하고 싶지 않아요."
      />
      <Button
        onClick={createPresent}
        className={`mr-4 mb-8 ${presetation ? "" : "blinking"}`}
      >
        발급하기 (present)
      </Button>

      <DialogDemo>
        <PresentaionCode />
      </DialogDemo>
      <br />

      {presetation ? (
        <>
          <Content>{presetation}</Content>
          <Explain
            description="present 함수를 실행시키면 VC 기반으로 VP가 발급 돼요. 
          present 함수를 실행시킬때 공개히고 싶은 정보를 내가 직접 정했어요. 토큰을 풀어볼까요?"
          />
          <Button onClick={getClaims} className="blinking mb-8">
            토큰 풀어보기 (get Claims)
          </Button>
        </>
      ) : (
        <>
          <Content>
            <p className="text-gray-500 mb-4">증명서를 발급해주세요.</p>
          </Content>
          <div className="flex justify-between">
            <Button
              className="text-base font-bold bg-slate-700 mt-8 mr-8 "
              onClick={() => setStep(ISSUE)}
            >
              ← PREV STEP
            </Button>
            <Skip setStep={setStep} status={VERIFY} />
          </div>
        </>
      )}

      {claims && (
        <>
          <Content>
            <JsonFormatter json={claims} tabWith={5} jsonStyle={jsonStyle} />
          </Content>
          <Explain description="present 함수를 사용해 공개하고 싶은 정보만을 조합해서 증명서를 만들었어요! 이걸 VP라고 할게요. 이제 과외 플랫폼에게 제출할 일만 남았어요." />
          <p className="text-xl font-bold  mb-4">[ ✔️ ] Mission2 Complete !</p>

          <div>
            <Button
              className="text-base font-bold bg-slate-700 mt-8 mr-8 "
              onClick={() => setStep(ISSUE)}
            >
              ← PREV STEP
            </Button>
            <Button
              className="blinking text-base font-bold bg-slate-700 mt-8"
              onClick={() => setStep(VERIFY)}
            >
              Go To Submit ➔
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
