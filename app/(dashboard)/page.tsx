"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { AccountForm } from "@/features/accounts/components/account-form";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  const { data, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div>
          <Button onClick={onOpen} hidden={data && data.length > 0}>
            Add an Account
          </Button>
          {/* The `NewAccountSheet` component is currently very 
          unstable and fails to render about half the time. For 
          the sake of development convenience, the form will be 
          placed directly here. */}
          <AccountForm onSubmit={() => {}} />
        </div>
        {data?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
      </div>
    </>
  );
}
