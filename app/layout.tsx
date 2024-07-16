import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientTransitionWrapper from "@/components/ClientTransitionWrapper";

import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.description}`,
  // description: siteConfig.description, // TODO: add longer description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning={true}>
      <body className={cn("min-h-screen font-sans antialiased")}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <ClientTransitionWrapper>
              {children}
            </ClientTransitionWrapper>
            <SiteFooter />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
