import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "Aly Badawy • Software Engineer",
  description:
    "Aly Badawy's personal website showcasing skills, projects, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AOSProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
