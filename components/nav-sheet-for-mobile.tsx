"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import { routes } from "./routes";

export const SheetComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className={`font-normal, be-while/10 hover:bg-white border-none 
                focus-visible:ring-offset-0 focus-visible:ring-transparent
                outline-none text-white focus:bg-white/30 transition`}
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={route.href === pathname ? "secondary" : "ghost"}
                key={route.href}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return null;
};
