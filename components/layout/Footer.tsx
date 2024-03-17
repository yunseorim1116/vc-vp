"use client";

import { TFunction } from "i18next";
import { SelectLanguage } from "./Select";

interface FooterProps {
  t: TFunction<any, undefined>;
  lng: string;
}

export const FooterBase = ({ t, lng }: FooterProps) => {
  return <SelectLanguage t={t} lng={lng} />;
};
