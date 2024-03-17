import { SelectLanguage } from "./Select";

interface FooterProps {
  lng: string;
}

const Footer = ({ lng }: FooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-gradient-to-r from-black to-gray-700 text-base font-medium shadow items-center justify-between">
      <div className="w-[48rem] mx-auto flex justify-end">
        <SelectLanguage lng={lng} />
      </div>
    </footer>
  );
};

export default Footer;
