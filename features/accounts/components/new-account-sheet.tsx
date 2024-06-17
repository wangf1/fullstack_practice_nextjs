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
import { useCreateAccount } from "../api/use-create-account";
import { insertAccountSchema } from "@/db/schema";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutaiotn = useCreateAccount();

  const formSchema = insertAccountSchema.pick({ name: true });

  type FormValues = z.input<typeof formSchema>;

  const onSubmit = (values: FormValues) => {
    mutaiotn.mutate(values);
  };

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
          <AccountForm
            onSubmit={onSubmit}
            disabled={mutaiotn.isPending}
            defaultValues={{ name: "" }}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};
