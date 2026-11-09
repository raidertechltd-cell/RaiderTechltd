import type { ReactNode } from "react";
import ContactCta from "./ContactCta";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteShell({
  children,
  showCta = true,
}: {
  children: ReactNode;
  showCta?: boolean;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {showCta && <ContactCta />}
      <Footer />
    </>
  );
}