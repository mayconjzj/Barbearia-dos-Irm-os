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
        <title>Sanctuarium</title>
        <meta name="description" content="Sanctuarium" />
      </head>
      <body>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
          <main className="px-4 md:px-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
