"use client";

import { Button } from "@/components/ui/button";
import GithubIcon from "@/public/images/github.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GithubSigninButton() {
  return (
    <Button onClick={() => signIn("github")} size="icon" variant="outline">
      <Image
        src={GithubIcon}
        alt="github logo"
        width={24}
        height={24}
        className="bg-gray-300 rounded-full"
      />
    </Button>
  );
}
