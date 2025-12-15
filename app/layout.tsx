import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const brand = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FrontFolk — Dedicated Frontend Engineer on Subscription",
  description:
    "Ship faster with a dedicated frontend engineer on subscription. UI polish, responsiveness, performance, and Figma-to-production execution for SaaS and B2B teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
