"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  const { data, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || data.length === 0) {
    return (
      <div>
        <Button onClick={onOpen}>Add an Account</Button>
      </div>
    );
  }

  return (
    <>
      <div>
        {data.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
      </div>
    </>
  );
}
