import { getCsrfToken } from "next-auth/react";
import LayoutUnauthenticated from "../../components/layout-unauthenticated";

export default function SignIn({ csrfToken }) {
  return (
    <LayoutUnauthenticated>
      <div className="isolate relative px-6 mx-auto max-w-2xl text-center lg:px-8">
        <h1 className="dark:text-brand-light text-brand-dark text-3xl font-bold tracking-tight sm:text-6xl">
          🥂 VIP Entrance
        </h1>

        <form
          className="flex flex-col gap-4 mt-10 mx-auto max-w-lg lg:flex-row"
          method="post"
          action="/api/auth/signin/email"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="ring-white/10 text-brand-dark border-brand-light-highlight dark:border-brand-dark-highlight flex-auto py-3.5 px-5 min-w-0 text-lg text-center bg-white rounded-md border ring-1 ring-inset shadow-sm focus:ring-2 focus:ring-inset focus:ring-white sm:leading-6 lg:text-left"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="bg-brand-accent hover:bg-brand-accent-highlight focus:bg-brand-accent-highlight focus-visible:outline-brand-light inline-block flex-none py-3.5 px-5 text-lg font-semibold text-white rounded-md shadow-sm focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2"
          >
            Sign in with Email
          </button>
        </form>

        <p className="text-brand-dark-highlight dark:text-brand-light-highlight mt-6 text-xl leading-8">
          Member of the DM Dinner Club? Sign in to claim your profile, verify
          your details, and connect with other members. Use the exact email
          address that we have on file for you.
        </p>
      </div>
    </LayoutUnauthenticated>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
