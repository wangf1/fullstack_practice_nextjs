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

  return (
    <>
      <div className="space-y-4">
        {data?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
        {(!!!data || data.length < 1) && (
          <div>
            <Button onClick={onOpen}>Add an Account</Button>
          </div>
        )}
      </div>
    </>
  );
}
