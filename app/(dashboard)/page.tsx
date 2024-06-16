"use client";

import { Button } from "@/components/ui/button";
import { insertAccountSchema } from "@/db/schema";
import { useCreateAccount } from "@/features/accounts/api/use-create-account";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { AccountForm } from "@/features/accounts/components/account-form";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { z } from "zod";

export default function Home() {
  const { onOpen } = useNewAccount();

  const { data, isLoading } = useGetAccounts();
  const mutaiotn = useCreateAccount();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const formSchema = insertAccountSchema.pick({ name: true });

  type FormValues = z.input<typeof formSchema>;

  const onSubmit = (values: FormValues) => {
    mutaiotn.mutate(values);
  };

  return (
    <>
      <div className="space-y-4">
        {data?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
        <div>
          <Button onClick={onOpen} hidden={data && data.length > 0}>
            Add an Account
          </Button>
          {/* The `NewAccountSheet` component is currently very 
          unstable and fails to render about half the time. For 
          the sake of development convenience, the form will be 
          placed directly here. */}
          <AccountForm
            onSubmit={onSubmit}
            disabled={mutaiotn.isPending}
            defaultValues={{ name: "" }}
          />
        </div>
      </div>
    </>
  );
}
