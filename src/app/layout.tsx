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
        <title>Sanctuarium</title>
        <meta
          name="description"
          content="Uma fusão única de barbearia e estúdio de tatuagens, onde estilo e autoexpressão se encontram. Nossa equipe dedicada oferece cortes de cabelo, barbas e tatuagens personalizadas em um ambiente acolhedor e sofisticado. Cada cliente é tratado de forma única, celebrando sua individualidade. Venha nos visitar e encontre seu santuário pessoal de estilo e beleza."
        />
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
