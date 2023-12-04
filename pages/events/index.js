import React from "react";
import LayoutContentPage from "../../components/layout-content-page";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutContentPage>
      <section className="flex flex-col gap-10 mx-auto sm:text-center">
        <h1 className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-4xl font-bold leading-8">
          Event Calendar
        </h1>
        <iframe
          src="https://lu.ma/embed/calendar/cal-ogrX3b4RQUAHB9M/events"
          width="650"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          className="border-brand-dark/10 dark:border-brand-light/10 rounded-md border-4"
        ></iframe>
        <div>
          <span className="pr-1">📆</span>
          {"  "}
          <Link
            href="https://lu.ma/dmdinnerclub"
            className="text-lg font-light hover:underline"
            target="_blank"
          >
            Click here to visit our Luma page
          </Link>
        </div>
      </section>
    </LayoutContentPage>
  );
}
