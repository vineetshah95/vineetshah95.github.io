import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { themeInitScript } from '@/components/ThemeButton';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-display' });
const body = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const site = 'https://shahvineet.com';
const description =
  'Vineet Shah, Senior Software Engineer. Backend systems, full stack, cloud. Java, Spring Boot, AWS, Kubernetes, React, Angular.';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: 'Vineet Shah',
  description,
  openGraph: {
    title: 'Vineet Shah, Senior Software Engineer',
    description: 'Backend systems · Full stack · Problem solver',
    type: 'website',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
