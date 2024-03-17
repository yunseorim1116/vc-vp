'use client';

import { useTranslation } from '@/app/i18n/client';
import { Badge } from '@/components/ui/badge';

const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-black to-gray-700 text-base font-medium shadow items-center justify-between z-50 text-white">
      <h1 className="text-4xl m-8 flex justify-center items-center">
        Issuer / Holder / Verifier
        <Badge className="ml-4 mt-2" variant="destructive">
          {t('title_badge')}
        </Badge>
      </h1>
    </header>
  );
};

export default Header;
