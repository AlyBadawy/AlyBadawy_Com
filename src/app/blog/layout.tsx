import { SidePanel } from "@/components/SidePanel";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Sticky Side Panel */}
        <aside className="w-full md:w-64 lg:w-72 md:sticky md:top-44 self-start">
          <SidePanel />
        </aside>
      </div>
    </div>
  );
}
