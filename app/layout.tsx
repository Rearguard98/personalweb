import type { Viewport } from 'next'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navigasi from "./components/Navigasi";
import Kaki from "./components/Kaki";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arrosyid Personal Web",
  description: "Website Pribadi Arrosyid Al Ayubi",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['Arrosyid Al Ayubi', 'Website Arrosyid Al Ayubi'],
  authors: [{ name: 'Arrosyid Al Ayubi', url: 'https://www.arrosyid.my.id' }],
  creator: 'Arrosyid Al Ayubi',
  publisher: 'Arrosyid Al Ayubi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.arrosyid.my.id'),
  alternates: {
    canonical: '/',
    languages: {
      'id': '/',
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', 'https://www.arrosyid.my.id/icon.png'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'app',
    title: 'Arrosyid Al Ayubi',
    description: 'Arrosyid Al Ayubi Personal Website',
    siteId: '',
    creator: '@arrosyidalayubi',
    creatorId: '',
    images: {
      url: 'https://www.arrosyid.my.id/og.png',
      alt: 'Arrosyid Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigasi/>
          <main className="w-full items-center max-w-6xl mx-auto px-4 ">{children}</main>
          <Kaki/>
        </ThemeProvider>
        </body>
    </html>
  );
}
