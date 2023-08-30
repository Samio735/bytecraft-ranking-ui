import Image from "next/image";
import "./globals.css";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Bytecraft Ranking System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex  w-full">
        <Sidebar></Sidebar>
        <div className="lg:w-[10vw]"></div>
        {children}
      </body>
    </html>
  );
}
