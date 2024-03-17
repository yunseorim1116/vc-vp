"use client";

import { useTranslation } from "../../../i18n/client";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { TFunction } from "i18next";

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

  return (
    <div>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:
      </Trans>
      {renderLanguageLinks()}
    </div>
  );
};
