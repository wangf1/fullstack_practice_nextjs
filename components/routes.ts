// components/routes.ts

export interface Route {
  href: string;
  label: string;
  hidden?: boolean;
}

export const routes: Route[] = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
    hidden: true,
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
    hidden: true,
  },
];
