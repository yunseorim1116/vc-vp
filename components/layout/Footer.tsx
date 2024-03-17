"use client";

import { useTranslation } from "../../app/i18n/client";
import Link from "next/link";
import { languages } from "@/app/i18n/settings";
import { TFunction } from "i18next";
import { SelectLanguage } from "./Select";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};

interface FooterProps {
  t: TFunction<any, undefined>;
  lng: string;
}

export const FooterBase = ({ t, lng }: FooterProps) => {
  const otherLanguages = languages.filter((language) => language !== lng);

  const renderLanguageLinks = () => {
    return otherLanguages.map((language, index) => (
      <span key={language}>
        {index > 0 && " or "}
        <Link href={`/${language}`}>{language}</Link>
      </span>
    ));
  };

  return <SelectLanguage t={t} lng={lng} />;
};
