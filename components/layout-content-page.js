import React from "react";
import Head from "./head";
import Footer from "./footer";
import Header from "./header";

export default function LayoutContentPage({ children }) {
  return (
    <div className="bg-brand-light dark:bg-brand-dark flex flex-col justify-between items-center min-h-screen">
      <Head />
      <Header />

      <main className="sm:max-w-[80%] px-8 sm:px-0 w-full flex flex-col grow justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
}
