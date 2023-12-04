import React from "react";
import LayoutContentPage from "../../components/layout-content-page";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutContentPage>
      <section className="flex flex-col gap-8 mx-auto sm:max-w-2xl sm:text-center">
        <h1 className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-4xl font-bold leading-8">
          Our Story
        </h1>
        <div className="text-center">
          <Image
            src="/kyle-and-josh-saint-germain.png"
            className="inline-block rounded-lg"
            alt="DM Dinner Club 2021"
            width={512 / 1.25}
            height={341 / 1.25}
          />
        </div>
        <div className="dark:text-brand-light-highlight flex flex-col gap-4 text-lg">
          <p>
            In 2022, Kyle sent cold DMs to a few Paris-based VCs with a focus on
            content and community building. After the first dinner everyone
            asked when&apos;s the next one? The curated dinner events continued
            but our guest lists expanded to include founders, operators and
            creators from all over Europe who believe in the power of community.
          </p>
          <p>
            Josh attended on of the early dinners and recognized the budding
            group was aligned with the vision and values of his company, Orbit,
            a community growth platform. That night, they become the official
            sponsor of the DM Dinner Club.
          </p>
          <p>
            Since then, we&apos;ve hosted dozens of events: dinners, apéros, and
            unique meetups all centered on elevated food & wine among passionate
            peers.
          </p>
        </div>
        <div>
          <span className="pr-1">🧑‍🍳</span>
          {"  "}
          <Link
            href="/members"
            className="dark:text-brand-light-highlight text-lg font-light hover:underline"
          >
            View our members &raquo;
          </Link>
        </div>
      </section>
    </LayoutContentPage>
  );
}
