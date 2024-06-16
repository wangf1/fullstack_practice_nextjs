import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";
import { AccountForm } from "./account-form";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>New Account</SheetTitle>
            <SheetDescription>
              Create a new account to trach your transactions.
            </SheetDescription>
          </SheetHeader>
          <AccountForm onSubmit={() => {}} />
        </SheetContent>
      </Sheet>
    </>
  );
};
