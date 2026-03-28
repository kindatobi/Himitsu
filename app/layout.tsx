import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himitsu - Realtime chat",
  description: "Share a room, say what you need to say, kill the room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
