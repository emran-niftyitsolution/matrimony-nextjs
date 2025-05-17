"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/sections/header";
import { usePathname } from "next/navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAuthPage =
    pathname?.includes("/login") || pathname?.includes("/signup");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
