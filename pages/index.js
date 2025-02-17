import React from "react";
import Image from "next/image";
import LayoutContentPage from "../components/layout-content-page";
import Marquee from "react-fast-marquee";

export default function Home() {
  const width = 220;
  const height = 220;
  return (
    <LayoutContentPage>
      <div className="flex flex-col gap-y-12 px-6 mx-auto lg:px-8">
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
        <section className="mx-auto max-w-md text-center">
          <p className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-xl leading-8">
            Hosting founders, operators, investors and creators who put a
            premium on community.
          </p>
        </section>
        <div className="mx-auto w-64">
          <Marquee
            pauseOnHover
            pauseOnClick
            direction="right"
            className="text-brand-dark-highlight dark:text-brand-light-highlight font-extrabold"
            speed={25}
          >
            Meal Flow &rsaquo; Deal Flow
          </Marquee>
        </div>
      </div>
    </LayoutContentPage>
  );
}
