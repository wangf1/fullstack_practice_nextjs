import Link from "next/link";

import EmailSigninForm from "@/app/components/EmailSigninForm";
import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 bg-black/70 rounded py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <h1 className="text-3xl font-semibold">Login in</h1>

      <EmailSigninForm />

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
