import type { Metadata, Viewport } from "next";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eosin-eight-0fz68017vk.vercel.app"),
  title: {
    default: "Dawit Misgna | Software Developer",
    template: "%s | Dawit Misgna",
  },
  description:
    "Dawit Misgna is a Software Developer based in Ethiopia, building Flutter mobile apps and full-stack web applications.",
  keywords: [
    "Dawit Misgna",
    "Flutter Developer Ethiopia",
    "Mobile App Developer Addis Ababa",
    "Full Stack Developer",
  ],
  authors: [{ name: "Dawit Misgna" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dawit Misgna",
    title: "Dawit Misgna | Software Developer",
    description:
      "Flutter Developer | Full Stack Developer | CyberSecurity Enthusiast based in Ethiopia.",
    images: [
      {
        url: "/images/portfolio_image.jpg",
        width: 400,
        height: 400,
        alt: "Dawit Misgna",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dawit Misgna | Software Developer",
    description:
      "Flutter Developer | Full Stack Developer | CyberSecurity Enthusiast based in Ethiopia.",
    images: ["/images/portfolio_image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>

  );
}
