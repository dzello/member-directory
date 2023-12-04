import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "./head";
import Footer from "./footer";
import Header from "./header";

export default function LayoutAuthenticated({ children }) {
  const { status } = useSession();
  const router = useRouter();

  // If user is unauthenticated, redirect to login page
  useEffect(() => {
    if (status === "unauthenticated") router.push("/api/auth/signin");
  }, [status]);

  // If user is anything other than explicitly authenticated (ie "loading"), show empty page
  if (status !== "authenticated") {
    return <Head />;
  }

  // Only show directory if confirmed authenticated
  return (
    <div className="bg-brand-light dark:bg-brand-dark flex flex-col justify-between items-center min-h-screen">
      <Head />
      <Header />

      <main className="sm:max-w-[80%] w-full">{children}</main>

      <Footer />
    </div>
  );
}
