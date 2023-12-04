import Image from "next/image";
import React from "react";
import Signin from "./signin";
import Link from "next/link";

export default function Header() {
  return (
    <header className="overflow-hidden flex justify-between items-center p-6 mx-auto w-full sm:max-w-[80%]">
      <Link className="hidden sm:flex" href="/">
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

      <div className="flex flex-1 gap-x-6 items-center sm:justify-end">
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

        <div className="hidden sm:block">
          <Signin />
        </div>
      </div>
    </header>
  );
}
