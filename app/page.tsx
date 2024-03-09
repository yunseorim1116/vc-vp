"use client";
import { Credential } from "@/components/Credential";
import { Description } from "@/components/Description";
import { SdInstance } from "@/components/SdInstance";

export default async function asyncHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-24 w-[48rem]">
        <Description />
        <Credential />
      </div>
    </main>
  );
}
