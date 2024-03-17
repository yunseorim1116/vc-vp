"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/app/i18n/settings";

export function SelectLanguage({ t, lng }: any) {
  const router = useRouter();
  const otherLanguages = languages.filter((language) => language !== lng);

  return (
    <Select
      onValueChange={(e) => {
        router.push(`/${e}`);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language">{lng}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>LANGUAGE</SelectLabel>
          {otherLanguages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
