import React from "react";
import Head from "next/head";
import SEO from "../next-seo.config";

export default function DefaultHead() {
  return (
    <Head>
      <title>{SEO.defaultTitle}</title>
      <link rel="icon" type="image/svg+xml" href="/logomark-light.png" />
    </Head>
  );
}
