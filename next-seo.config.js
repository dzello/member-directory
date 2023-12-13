export default {
  defaultTitle: "DM Dinner Club",
  titleTemplate: "%s | DM Dinner Club",
  description:
    "Hosting founders, operators, investors and creators who put a premium on community.",
  twitter: {
    cardType: "summary",
    handle: "@RoiStartup",
  },
  openGraph: {
    type: "website",
    url: process.env.NEXTAUTH_URL,
    defaultTitle: "DM Dinner Club",
    titleTemplate: "%s | DM Dinner Club",
    description:
      "Hosting founders, operators, investors and creators who put a premium on community.",
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/brand-logo-background.png`,
        width: 200,
        height: 200,
        alt: "DM Dinner Club - Established 2022",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: `${process.env.NEXTAUTH_URL}/brand-logo-background.png`,
    },
  ],
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};
