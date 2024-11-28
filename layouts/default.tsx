import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto   px-6  main pt-6">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.grank.co.in/"
          title="G-Rank Homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">G-Rank</p>
        </Link>
      </footer>
    </div>
  );
}
