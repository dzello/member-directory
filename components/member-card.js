import IdentityLink from "./identity-link";
import { useState } from "react";
import MemberCardEditState from "./edit-state/member-card-edit-state";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Error from "./flashes/error";
import Success from "./flashes/success";

export default function MemberCard({ member, editable }) {
  const [editState, setEditState] = useState(false);
  const [imageError, setImageError] = useState("");
  const [success, setSuccess] = useState("");

  const { data: session } = useSession();

  return (
    <li className="flex flex-col gap-6 xl:flex-row" key={member.id}>
      {/* If there is an error or member has no avatar, show default square */}
      {!!imageError || !member.avatar_url ? (
        <div className="max-w-xs">
          {/* If admin, show warning message as well */}
          {session?.user.admin && !!imageError ? (
            <Error message={imageError} />
          ) : (
            <></>
          )}
          <div className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover h-72 bg-gray-100 dark:bg-gray-800"></div>
        </div>
      ) : (
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover h-72"
          // To remote load images in Next you need to specify their source
          // in next.config.js -> images -> remotePatterns. Orbit avatar URLs
          // come from a number of different sources, so we're trying to catch
          // as many as possible by accepting the common sources.
          src={member.avatar_url}
          width={300}
          height={375}
          alt=""
          onError={() =>
            setImageError(
              `Failed to load image. Ensure resource loads correctly & that the following URL is configured in your next.config.js. ${member.avatar_url}`
            )
          }
        />
      )}

      {editState ? (
        <MemberCardEditState
          setEditState={setEditState}
          member={member}
          setSuccess={setSuccess}
        />
      ) : (
        <div className="flex-auto">
          <h2 className="text-brand-dark dark:text-brand-light text-xl font-semibold tracking-tight leading-8">
            {member.name}
          </h2>

          {!!success ? <Success message={success} /> : ""}

          <section className="flex flex-col my-2 space-y-2">
            {member.identities.map((identity) => (
              <IdentityLink identity={identity} key={identity.id} />
            ))}
          </section>

          {member.bio && (
            <p className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-base leading-7">
              {member.bio}
            </p>
          )}

          {editable ? (
            <button
              onClick={() => setEditState(true)}
              className="focus-visible:outline-brand-light text-brand-dark dark:text-brand-light border-brand-accent hover:bg-brand-accent focus:bg-brand-accent inline-block py-1.5 px-2 mt-2 font-medium rounded-md border-2 border shadow-sm hover:text-white focus:text-white focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2"
            >
              Edit
            </button>
          ) : (
            <></>
          )}
        </div>
      )}
    </li>
  );
}
