import { Cairo, Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Head from "./Head";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900", "1000"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      <body className={cairo.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
