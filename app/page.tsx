"use client";
import { Credential } from "@/components/Credential";
import { SdInstance } from "@/components/SdInstance";

export default async function asyncHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Credential />
    </main>
  );
}
