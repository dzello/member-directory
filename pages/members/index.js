import { useState } from "react";
import LayoutAuthenticated from "../../components/layout-authenticated";
import AdminControls from "../../components/admin-controls/admin-controls";
import MemberList from "../../components/member-list";
import { NextSeo } from "next-seo";

export default function Members({ initialMembers, initialFeatured }) {
  const [members, setMembers] = useState(initialMembers);
  const [featured] = useState(initialFeatured);

  return (
    <LayoutAuthenticated>
      <NextSeo
        title="Members"
        openGraph={{
          url: `${process.env.NEXTAUTH_URL}/members`,
        }}
      />
      <div className="px-6 mx-auto sm:py-8 lg:px-8">
        <section className="mx-auto max-w-lg sm:text-center">
          <h1 className="text-brand-dark dark:text-brand-light text-3xl font-bold tracking-tight sm:text-4xl">
            DM Dinner Club Members
          </h1>

          <p className="text-brand-dark-highlight dark:text-brand-light-highlight mt-2 text-lg leading-8">
            Browse the directory of members below. Find your name to update your
            profile information. Thank you!
          </p>
        </section>

        <AdminControls setMembers={setMembers} />

        <MemberList title="Organizers & Featured Guests" members={featured} />

        <MemberList title="All Members" members={members} />
      </div>
    </LayoutAuthenticated>
  );
}

// Fetch members from /api/members route on component load (ie, initialise the data)
// This is set as default value for the useState for members
export async function getServerSideProps(context) {
  const res = await fetch(`http://${context.req.headers.host}/api/members`, {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });
  const data = await res.json();

  if (!data) {
    return {
      props: {
        initialMembers: [],
        initialFeatured: [],
      },
    };
  }

  return {
    props: {
      initialMembers: data.members || [],
      initialFeatured: data.featured || [],
    },
  };
}
