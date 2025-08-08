import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shortify - Smarter Links, Simplified",
  description:
    "Shortify is a modern URL shortener that makes sharing long links fast, clean, and hassle-free. Customize, track, and manage your links with ease all in one sleek, user-friendly platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
