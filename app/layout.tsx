import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import {
  COMPANY_NAME,
  COMPANY_SLOGAN,
  HAS_REAL_PHONE,
  SERVICE_AREA,
  SERVICE_CITY,
  SERVICE_REGION,
  SITE_URL,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from "@/lib/site";

// Ícones, imagem de compartilhamento e manifest ficam na pasta /app e o Next.js
// gera as tags automaticamente:
//   favicon.ico, icon.png, apple-icon.png -> ícones da aba e da tela inicial
//   opengraph-image.jpg, twitter-image.jpg -> imagem ao compartilhar o link (1200x630, JPG < 300 KB para o WhatsApp)
//   manifest.ts -> "Adicionar à tela inicial" no celular

// Inter no texto e Sora nos títulos (ligadas ao Tailwind no globals.css).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

// A cidade (SERVICE_CITY) entra no título, que precisa ser curto; a área completa (SERVICE_AREA) entra nas descrições.
const IN_AREA = SERVICE_AREA ? ` em ${SERVICE_AREA}` : "";

// Título: o que a pessoa procura primeiro, a marca depois (o Google corta perto de 60 caracteres).
const TITLE = SERVICE_CITY
  ? `Instalação de Câmeras de Segurança em ${SERVICE_CITY} | ${COMPANY_NAME}`
  : `Instalação de Câmeras de Segurança e CFTV | ${COMPANY_NAME}`;

// Descrição: aparece embaixo do título no Google (ideal até uns 155 caracteres) e termina com a chamada.
const DESCRIPTION = `Instalação de câmeras de segurança CFTV${IN_AREA}, com monitoramento 24h pelo celular. Para casas, comércios, empresas e condomínios. Peça seu orçamento!`;

// Texto de quando o link é compartilhado no WhatsApp e nas redes sociais.
const SHARE_TITLE = `${COMPANY_NAME} | Câmeras de Segurança e Monitoramento 24 horas`;
const SHARE_DESCRIPTION = `Sua segurança é a nossa prioridade. Instalação de câmeras CFTV${IN_AREA} com acesso pelo celular, tablet e PC. Solicite seu orçamento pelo WhatsApp.`;

const SERVICES = [
  "Instalação de câmeras de segurança CFTV residencial e comercial",
  "Monitoramento 24 horas pelo celular, tablet e PC",
  "Suporte técnico e manutenção de câmeras de segurança",
];

export const metadata: Metadata = {
  // Transforma URLs relativas (imagens, canonical) em absolutas.
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: COMPANY_NAME,
  category: "Segurança eletrônica",

  // O Google ignora keywords, mas outros buscadores ainda leem.
  keywords: [
    "instalação de câmeras de segurança",
    "instalação de câmeras CFTV",
    "câmeras de segurança",
    "câmeras de monitoramento",
    "CFTV",
    "monitoramento 24 horas",
    "câmera de segurança residencial",
    "câmeras para comércio",
    "câmeras para condomínio",
    "câmeras para empresas",
    "ver câmeras pelo celular",
    "segurança eletrônica",
    "manutenção de câmeras",
    "orçamento de câmeras de segurança",
    COMPANY_NAME,
    ...(SERVICE_CITY
      ? [`instalação de câmeras em ${SERVICE_CITY}`, `câmeras de segurança em ${SERVICE_CITY}`, `CFTV em ${SERVICE_CITY}`]
      : []),
  ],
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
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

  // Verificação do Google Search Console: descomente e cole o código quando cadastrar o site.
  // verification: {
  //   google: "seu-codigo-de-verificacao-google",
  // },
};

// Cor da barra do navegador no celular (o site é sempre escuro).
export const viewport: Viewport = {
  themeColor: "#050b18",
  colorScheme: "dark",
};

// Dados estruturados: dizem ao Google que é um negócio local, quais serviços presta e para quem.
// Para aparecer melhor no Google e no Maps, acrescente "address" (endereço) quando tiver.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#empresa`,
      name: COMPANY_NAME,
      slogan: COMPANY_SLOGAN,
      description: DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      ...(SERVICE_CITY
        ? {
            areaServed: [{ "@type": "City", name: SERVICE_CITY }, SERVICE_AREA],
            address: {
              "@type": "PostalAddress",
              addressLocality: SERVICE_CITY,
              addressRegion: SERVICE_REGION,
              addressCountry: "BR",
            },
          }
        : {}),
      ...(HAS_REAL_PHONE
        ? {
            telephone: `+${WHATSAPP_NUMBER}`,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Orçamentos",
              telephone: `+${WHATSAPP_NUMBER}`,
              url: whatsappUrl(),
              availableLanguage: "Portuguese",
            },
          }
        : {}),
      knowsAbout: ["Câmeras de segurança", "CFTV", "Monitoramento", "Segurança eletrônica"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços",
        itemListElement: SERVICES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      audience: {
        "@type": "Audience",
        audienceType: "Residências, comércios, empresas e condomínios",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: COMPANY_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#empresa` },
    },
  ],
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
