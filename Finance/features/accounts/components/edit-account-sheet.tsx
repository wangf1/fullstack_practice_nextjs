import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertAccountSchema } from "@/db/schema";
import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";
import { useEditAccount } from "@/features/accounts/api/use-edit-account";
import { useGetAccount } from "@/features/accounts/api/use-get-account";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useConfirm } from "@/hooks/use-confirm";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { AccountForm } from "./account-form";

export const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount();

  const accountQuery = useGetAccount(id);
  const editMutaiotn = useEditAccount(id);
  const deleteMutaiotn = useDeleteAccount(id);

  const isPending =
    accountQuery.isLoading ||
    editMutaiotn.isPending ||
    deleteMutaiotn.isPending;

  const formSchema = insertAccountSchema.pick({ name: true });

  type FormValues = z.input<typeof formSchema>;

  const onSubmit = (values: FormValues) => {
    editMutaiotn.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deleteMutaiotn.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Account",
    "Are you sure you want to delete this account?"
  );

  const defaultValues = accountQuery.data
    ? { name: accountQuery.data.name }
    : { name: "" };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>Edit an existing account.</SheetDescription>
          </SheetHeader>
          {isPending ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              onDelete={onDelete}
              disabled={isPending}
              defaultValues={defaultValues}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
