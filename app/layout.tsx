import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devil & Sun tattoo",
  description: "Web for Devil & Sun tattoo studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en, cs">
      <body>
        {children}
      </body>
    </html>
  );
}
