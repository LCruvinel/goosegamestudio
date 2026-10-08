import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#15231d]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
