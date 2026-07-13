import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Lloyd Nim — Full Stack Developer",
  description: "Portfolio of Lloyd Nim, full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
