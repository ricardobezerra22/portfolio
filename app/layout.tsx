import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ricardo Bezerra | Full Stack Developer",
  description: "Full Stack Developer passionate about creating modern scalable web applications with microservices architecture, microfrontend and serverless technologies.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Node.js", "TypeScript", "Microservices"],
  authors: [{ name: "Ricardo Bezerra" }],
  creator: "Ricardo Bezerra",
  publisher: "Ricardo Bezerra",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ricardobezerra.dev",
    siteName: "Ricardo Bezerra Portfolio",
    title: "Ricardo Bezerra | Full Stack Developer",
    description: "Full Stack Developer passionate about creating modern scalable web applications",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Bezerra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Bezerra | Full Stack Developer",
    description: "Full Stack Developer passionate about creating modern scalable web applications",
    images: ["/assets/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className="dark" 
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} font-sans min-h-screen flex flex-col`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
