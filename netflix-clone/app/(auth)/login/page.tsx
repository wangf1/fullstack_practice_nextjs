import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "@/public/images/github.svg";
import GoogleIcon from "@/public/images/google.svg";

export default function Login() {
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
