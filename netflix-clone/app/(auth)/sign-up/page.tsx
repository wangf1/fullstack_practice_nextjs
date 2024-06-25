import { authOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GithubIcon from "@/public/images/github.svg";
import GoogleIcon from "@/public/images/google.svg";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 bg-black/70 rounded py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <div className="space-y-6 mt-5">
          <Input type="email" name="email" placeholder="Email" />
          <Button variant="destructive" className="w-full bg-red-600">
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-gray-400 text-sm mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-gray-200 hover:underline">
          Log In
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <Image
            src={GithubIcon}
            alt="github logo"
            width={24}
            height={24}
            className="bg-gray-300 rounded-full"
          />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="google logo" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
