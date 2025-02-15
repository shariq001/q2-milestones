"use client"; // This makes it a client component

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current Path:", pathname); // Debugging to check if it's detecting the correct route
  }, [pathname]);

  // Define routes where Footer should be hidden
  const hideFooterRoutes = ["/"];

  return (
    <>
      {children}
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </>
  );
}
