import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Saikot Paul | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
