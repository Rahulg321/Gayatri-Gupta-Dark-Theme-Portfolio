import { Inter, Montserrat, Syne, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
});
