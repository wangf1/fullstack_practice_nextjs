"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCsrfToken } from "next-auth/react";

export default function Home() {
  const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const csrfToken = await getCsrfToken();
        setCsrfToken(csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);
  // Email login is not working because there is no free email service available.
  return (
    <div>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="space-y-6 mt-5">
          <Input type="email" name="email" placeholder="Email" />
          <Button
            disabled={csrfToken === undefined}
            type="submit"
            variant="destructive"
            className="w-full bg-red-600"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
