import { Loader2 } from "lucide-react";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { UserButtonComponent } from "./user-button";
import { WelcomeMsg } from "./wellcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <UserButtonComponent />
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};
