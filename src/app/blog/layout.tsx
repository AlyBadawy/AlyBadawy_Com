import { SidePanel } from "@/components/SidePanel";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row-reverse gap-8 items-start">
      <aside className="w-full lg:w-64 flex-shrink-0">
        <SidePanel />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
