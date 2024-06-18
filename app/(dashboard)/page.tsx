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

  return <></>;
}
