import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Especialidades Conquistadores",
  description: "Visualizador de requisitos de especialidades",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="es"
          className={cn(
              "h-full antialiased dark",
              inter.variable,
              jetbrainsMono.variable
          )}
          suppressHydrationWarning
      >
          <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
            {children}
          </body>
      </html>
  );
}