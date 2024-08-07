import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import { poppins, inter, montserrat } from "./font";
import Footer from "@/components/Footer";
import MobileNavSheet from "@/components/MobileNavSheet";
import DesktopSidebar from "@/components/Sidebar";
import { GoogleAnalytics } from "@next/third-parties/google";
import DisclaimerDialog from "@/components/DisclaimerDialog";

export const metadata: Metadata = {
  metadataBase: new URL("https://gayatrilawoffices.in"),
  title: {
    default: "Gayatri Law Offices",
    template: `%s | Gayatri Law Offices`,
  },
  description:
    "The Law Offices of Gayatri Gupta. Advocate Gayatri Gupta: Delivering Expert Paralegal Assistance and Contract Management Solutions to US and Canadian Clients. Specializing in Legal Research, Documentation, and Compliance.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>

  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen w-full bg-background font-sans antialiased",
          poppins.variable,
          montserrat.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grid min-h-screen w-full h-full md:grid-cols-[240px_1fr]">
            <DisclaimerDialog />
            <div className="fixed bottom-6 left-6 z-30 md:hidden">
              <MobileNavSheet />
            </div>
            <DesktopSidebar />
            <div className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-BZMSBQV0Q6" />
    </html>
  );
}
