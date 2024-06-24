import Image from "next/image";
import { ReactNode } from "react";

import BackgroundImage from "@/public/images/login_background.jpg";
import Logo from "@/public/images/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md: bg-transparent">
      <Image
        src={BackgroundImage}
        alt="Login background image"
        className="hidden sm:flex object-cover z-[-10] brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="Netflix logo"
        width={120}
        height={120}
        className="absolute left-4 top-4 md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
}
