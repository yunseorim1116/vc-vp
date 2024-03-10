import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export const DialogDemo = ({ children }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">코드 보기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>CODE</DialogTitle>
          <DialogDescription>
            요기에 코드를 띄울거애오
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
