import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  metadataBase: new URL("https://ellsentravellift.com"),
  title: "800V DC Power Supply | eTommens High Voltage Variable Programmable Series",
  description: "Discover high-precision 800V DC power supplies by eTommens. Ideal for high-voltage laboratories, EV testbeds, aerospace automation, and rack integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-behavior-smooth">
      <body className="min-h-screen bg-[#0a0a0c] text-gray-300 font-sans antialiased selection:bg-yellow-500/20 selection:text-yellow-500 flex flex-col justify-between">
        <div className="w-full">
          <Header />
          <main id="primary-workspace" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
            <Breadcrumbs />
            <div id="dynamic-content-wrapper" className="min-h-[450px]">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
