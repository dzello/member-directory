import MemberCard from "./member-card";
import { useSession } from "next-auth/react";
import MemberPreview from "./member-preview";

export default function MemberList({ members, title, preview, listClasses }) {
  const { data: session } = useSession();

  if (!members || members.length === 0) return;

  // Default value for list classes
  listClasses ||=
    "grid grid-cols-1 gap-x-6 gap-y-20 mt-6 mx-auto max-w-2xl sm:grid-cols-2 lg:gap-x-10 lg:max-w-6xl xl:max-w-none 2xl:grid-cols-3";

  return (
    <>
      <h2 className="text-brand-dark dark:text-brand-light mt-10 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>

      <ul role="list" className={listClasses}>
        {preview
          ? members.map((member) => {
              // Only show members who are visible in public directory
              if (!member.shownInDirectory || !member.shownInPublicDirectory)
                return;

              return <MemberPreview member={member} key={member.id} />;
            })
          : members.map((member) => {
              // Only show members who are visible in directory
              if (!member.shownInDirectory) return;

              return (
                <MemberCard
                  member={member}
                  editable={
                    member.email === session?.user.email || session?.user.admin
                  }
                  key={member.id}
                />
              );
            })}
      </ul>
    </>
  );
}
