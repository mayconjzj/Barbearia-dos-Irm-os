import { Sanctuarium } from '@/config/sanctuarium';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

import { Providers } from './providers';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>{Sanctuarium.name}</title>
        <meta name="description" content={Sanctuarium.description} />
      </head>
      <body>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          <main className="px-2 md:px-20 mt-[60px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
