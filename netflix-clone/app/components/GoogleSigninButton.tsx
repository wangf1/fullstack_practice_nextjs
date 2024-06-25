"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/public/images/google.svg";

export default function GoogleSigninButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} alt="google logo" width={24} height={24} />
    </Button>
  );
}
