import Image from "next/image";
import React from "react";
import Signin from "./signin";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex gap-x-6 justify-between items-center p-6 mx-auto w-full max-w-[80%] lg:px-8">
      <Link className="flex" href="/">
        <Image
          className="hidden w-auto h-10 dark:block"
          src="/classic-logotype-light.svg"
          alt="Home"
          width={50}
          height={50}
        />

        <Image
          className="block w-auto h-10 dark:hidden"
          src="/classic-logotype-dark.svg"
          alt="Home"
          width={50}
          height={50}
        />
      </Link>

      <div className="flex flex-1 gap-x-6 justify-end items-center">
        <Link
          className="text-brand-dark dark:text-brand-light justify-end text-xl font-light hover:underline focus:underline"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-brand-dark dark:text-brand-light justify-end text-xl font-light hover:underline focus:underline"
          href="/events"
        >
          Events
        </Link>
        <Link
          className="text-brand-dark dark:text-brand-light justify-end text-xl font-light hover:underline focus:underline"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-brand-dark dark:text-brand-light justify-end text-xl font-light hover:underline focus:underline"
          href="/members"
        >
          Members
        </Link>
        <div />

        <Signin />
      </div>
    </header>
  );
}
