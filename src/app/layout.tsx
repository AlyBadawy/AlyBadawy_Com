import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Aly Badawy's personal website showcasing skills, projects, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!max-w-full">
      <head>
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="!overflow-x-hidden">
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
