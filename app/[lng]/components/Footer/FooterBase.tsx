import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { TFunction } from "i18next";

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
