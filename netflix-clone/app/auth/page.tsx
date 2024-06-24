import Image from "next/image";

export default function Auth() {
  return (
    <div className="text-white  h-full w-full bg-[url('/images/login_background.jpg')]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/netflix_logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </nav>
      </div>
    </div>
  );
}
