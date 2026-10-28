import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import GlobsNavbar from "@/components/GlobsLayout/GlobsNavbar";
import GlobsFooter from "@/components/GlobsLayout/GlobsFooter";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import AutoLogout from "@/components/AutoLogout";
import { prisma } from "@/lib/prisma";

export const revalidate = 0; // Ensure live data fetching for theme settings

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "INNOVEITY GLOBS PRIVATE LIMITED - Sustainable Knowledge Partner",
  description:
    "Building Institutions That Are Ready for the Future. Advisory, academic excellence, industry connect, technology, and sustainable growth.",
  keywords:
    "institutional advisory, academic excellence, accreditation quality, NAAC NBA NIRF, industry connect, higher education transformation, corporate training, ESG consulting",
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let themeData = null;
  try {
    const data = await prisma.themeSettings.findUnique({ where: { id: 1 } });
    if (data) {
      themeData = JSON.parse(data.contentJson);
    }
  } catch (error) {
    console.error("Failed to load theme settings from MySQL:", error);
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {themeData?.colors && (
          <style
            dangerouslySetInnerHTML={{
              __html: `
              :root {
                --color-brand-primary: ${themeData.colors.primary || "#0F766E"};
                --color-brand-secondary: ${themeData.colors.secondary || "#0B2545"};
                --color-brand-accent: ${themeData.colors.accent || "#10B981"};
                --color-success: ${themeData.colors.success || "#059669"};
                --color-warning: ${themeData.colors.warning || "#F59E0B"};
                --background: ${themeData.colors.background || "#FFFFFF"};
                --foreground: ${themeData.colors.foreground || "#0F172A"};
              }
            `,
            }}
          />
        )}
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen pt-[82px] sm:pt-[88px] lg:pt-[94px] antialiased overflow-x-hidden bg-white text-slate-900`}
      >
        <AutoLogout />
        <GlobsNavbar />
        <SmoothScroll />
        <main className="relative">{children}</main>
        <GlobsFooter />
        <FloatingContactWidget initialOptions={themeData?.floatingContactWidget} />
      </body>
    </html>
  );
}
