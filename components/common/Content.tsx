import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Content = ({ children }: any) => {
  return (
    <Alert className="bg-slate-50">
      <AlertDescription className="text-base mt-4 break-all">
        {children}
      </AlertDescription>
    </Alert>
  );
};
