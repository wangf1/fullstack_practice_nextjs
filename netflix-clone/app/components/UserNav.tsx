import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRef } from "react";

export default function UserNav() {
  const { data: session } = useSession();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const giveupFocus = (e: Event) => {
    e.preventDefault();
    buttonRef.current?.blur(); // Blur the button, i.e. remove focus
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={buttonRef}
            variant="ghost"
            className="relative p-0 m-0 h-10 w-10 rounded-full"
          >
            <Avatar className="h-full w-full rounded-full">
              <AvatarImage
                src={session?.user?.image ?? ""}
                className="h-full w-full rounded-sm"
              />
              <AvatarFallback className="rounded-sm">User</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent forceMount onCloseAutoFocus={giveupFocus}>
          <DropdownMenuLabel className="text-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
