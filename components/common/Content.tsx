import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Alert className="bg-slate-50">
      <AlertDescription className="text-base mt-4 break-all">
        {children}
      </AlertDescription>
    </Alert>
  );
};
