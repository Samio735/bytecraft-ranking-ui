import Image from "next/image";
import "./globals.css";
import Sidebar from "./Sidebar";
import { NavbarSimple } from "./NavBar";

export const metadata = {
  title: "Bytecraft Ranking System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  w-full">
        <div className="flex w-full">
          <Sidebar></Sidebar>
          <div className="lg:w-[10vw]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
