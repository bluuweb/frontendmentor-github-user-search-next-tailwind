import "./globals.css";
import { Space_Grotesk } from "next/font/google";

import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="grid min-h-screen place-content-center bg-gray-500">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
