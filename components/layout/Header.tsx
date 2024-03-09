import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-black to-gray-700 text-base font-medium shadow items-center justify-between z-50 text-white">
      <h1 className="text-4xl m-8 flex justify-center items-center">
        Issuer / Holder / Verifier
        <Badge className="ml-4 mt-2" variant="destructive">
          Concept 이해하기
        </Badge>
      </h1>
    </header>
  );
};

export default Header;
