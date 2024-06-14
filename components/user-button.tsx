
import { Loader2 } from "lucide-react";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";

export const UserButtonComponent = () => {
  return (
    <>
      <ClerkLoading>
        <Loader2 className="animate-spin size-8 text-slate-400" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton afterSignOutUrl="/" />
      </ClerkLoaded>
    </>
  );
};
