import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 bg-black/70 rounded py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold">Login in</h1>
        <div className="space-y-6 mt-5">
          <Input type="email" name="email" placeholder="Email" />
          <Button variant="destructive" className="w-full bg-red-600">
            Login in
          </Button>
        </div>
      </form>

      <div className="text-gray-400 text-sm mt-2">
        New to Netflix?{" "}
        <Link href="/sign-up" className="text-gray-200 hover:underline">
          Sign up now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
}
