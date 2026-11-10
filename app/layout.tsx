import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { COMPANY_NAME, SITE_URL } from "@/lib/site";

// Ícones, imagem de compartilhamento e manifest ficam na pasta /app e o Next.js
// gera as tags automaticamente:
//   favicon.ico, icon.png, apple-icon.png -> ícones da aba e da tela inicial
//   opengraph-image.jpg, twitter-image.jpg -> imagem ao compartilhar o link (1200x630, JPG < 300 KB para o WhatsApp)
//   manifest.ts -> "Adicionar à tela inicial" no celular

// Inter no texto e Sora nos títulos (ligadas ao Tailwind no globals.css).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const TITLE = `${COMPANY_NAME} | Instalação de Câmeras CFTV e Monitoramento`;
const DESCRIPTION =
  "Instalação de câmeras CFTV residencial e comercial, com monitoramento 24 horas pelo celular, tablet e PC. Solicite seu orçamento pelo WhatsApp.";
const SHARE_TITLE = `${COMPANY_NAME} | Sua segurança é a nossa prioridade`;
const SHARE_DESCRIPTION =
  "Instalação de câmeras CFTV e monitoramento para residências, comércios, empresas e condomínios.";

export const metadata: Metadata = {
  // Transforma URLs relativas (imagens, canonical) em absolutas.
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: COMPANY_NAME,

  // O Google ignora keywords, mas outros buscadores ainda leem.
  keywords: [
    "instalação de câmeras",
    "câmeras CFTV",
    "CFTV",
    "monitoramento 24 horas",
    "câmeras de segurança",
    "segurança eletrônica",
    "D&R Soluções",
  ],
  publisher: COMPANY_NAME,

  // Aponta a versão "oficial" da página e evita conteúdo duplicado.
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Compartilhamento em redes sociais e WhatsApp (a imagem vem de opengraph-image.jpg).
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },
};

// Cor da barra do navegador no celular (o site é sempre escuro).
export const viewport: Viewport = {
  themeColor: "#050b18",
  colorScheme: "dark",
};

// Dados estruturados: ajudam o Google a entender que o site é de um negócio de serviços.
// Quando tiver telefone e endereço reais, acrescente "telephone" e "address" aqui.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description: DESCRIPTION,
  knowsAbout: ["Instalação de câmeras CFTV", "Monitoramento"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
