'use client';

import './button.css';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Chapter } from './common/Chapter';
import { Explain } from './common/Explain';
import axios from 'axios';
import { Content } from './common/Content';
import JsonFormatter from 'react-json-formatter';
import { jsonStyle } from '@/const/style';
import { ISSUE, VERIFY } from '@/const/status';
import { Skip } from './common/Skip';
import PresentaionCode from '@/components/mdx/presentaion.mdx';
import { useTranslation } from '@/app/i18n/client';
import { DialogDemo } from './common/DialogDemo';

export const Holder = ({
  setStep,
  lng,
}: {
  setStep: (state: string) => void;
  lng: string;
}) => {
  const { t } = useTranslation(lng);
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
      <Chapter text={t('me')} text2="(Holder)" desc={t('disclosure')} />
      <br />
      <Explain description={t('presentDesc1')} />
      <Button
        onClick={createPresent}
        className={`mr-4 mb-8 ${presetation ? '' : 'blinking'}`}
      >
        {presetation ? 'Done!' : t('present')}
      </Button>

      <DialogDemo>
        <PresentaionCode />
      </DialogDemo>
      <br />

      {presetation ? (
        <>
          <Content>{presetation}</Content>
          <Explain description={t('presentDesc2')} />
          <Button
            onClick={getClaims}
            className={`${claims ? '' : 'blinking'} mb-8`}
          >
            {claims ? 'Done!' : t('getClaims')}
          </Button>
        </>
      ) : (
        <>
          <Content>
            <p className="text-gray-500 mb-4"> {t('plzIssueCredential')}</p>
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
          <Explain description={t('presentDesc3')} />
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
