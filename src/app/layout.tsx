import type { Metadata } from 'next';

import { Sanctuarium } from '@/config/sanctuarium';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: Sanctuarium.name,
    template: `%s | ${Sanctuarium.name}`
  },
  description: Sanctuarium.description,
  icons: {
    icon: {
      url: `${Sanctuarium.favicon}`
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          <main className="px-2 md:px-20 mt-[60px]">{children}</main>
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
