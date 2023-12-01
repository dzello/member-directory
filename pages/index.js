import React from "react";
import Image from "next/image";
import LayoutContentPage from "../components/layout-content-page";

export default function Home() {
  const width = 220;
  const height = 220;
  return (
    <LayoutContentPage>
      <div className="flex px-6 mx-auto sm:flex-col sm:gap-y-12 lg:px-8">
        <section className="mx-auto text-center">
          <Image
            className="hidden dark:inline-block"
            src="/full-logotype-light.svg"
            alt="DM Dinner Club Logo"
            width={width}
            height={height}
          />
          <Image
            className="inline-block dark:hidden"
            src="/full-logotype-dark.svg"
            alt="DM Dinner Club Logo Dark"
            width={width}
            height={height}
          />
        </section>
        <section className="mx-auto max-w-md sm:text-center">
          <p className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-xl leading-8">
            Hosting founders, operators, investors and creators who put a
            premium on community.
          </p>
        </section>
      </div>
    </LayoutContentPage>
  );
}
