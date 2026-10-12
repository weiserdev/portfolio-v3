import Script from "next/script";
import { Manrope, Geologica } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "400",
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Peter Weiser | Creative Full-Stack Product Developer",
  keywords:
    "Peter Weiser, Creative Full-Stack Product Developer, Full-Stack Developer, Product Developer, Product Engineer, React, Next.js, TypeScript, PostgreSQL, GraphQL, Prisma, React Native, Node.js, Three.js, Tailwind CSS, AI-Assisted Development",
  description:
    "Creative Full-Stack Product Developer building complete digital products from idea to pixel, including web applications, mobile apps, e-commerce experiences, educational tools, interactive brand concepts, and games.",
  metadataBase: new URL("https://peterweiser.com"),
  authors: [{ name: "Peter Weiser", url: "https://peterweiser.com" }],
  openGraph: {
    title: "Peter Weiser | Creative Full-Stack Product Developer",
    description:
      "Creative Full-Stack Product Developer building complete digital products from idea to pixel.",
    url: "https://peterweiser.com",
    siteName: "Peter Weiser",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peter Weiser - Creative Full-Stack Product Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWMM303M4E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWMM303M4E');
          `}
        </Script>

        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Peter Weiser",
              "url": "https://peterweiser.com",
              "image": "https://peterweiser.com/og-image.png",
              "jobTitle": "Creative Full-Stack Product Developer",
              "description": "Creative Full-Stack Product Developer building complete digital products from idea to pixel.",
              "sameAs": [
                "https://github.com/weiserdev",
                "https://linkedin.com/in/pweiser"
              ]
            }
          `}
        </Script>

        {/* Optional redundant tags (already handled by metadata but safe fallback) */}
        <meta name="theme-color" content="#0f172a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://peterweiser.com/" />
      </head>
      <body
        className={`${manrope.variable} ${geologica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}