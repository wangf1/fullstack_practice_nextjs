"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  const { data, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || data.length === 0) {
    return <div>No accounts</div>;
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
