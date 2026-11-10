// Dados da empresa usados em todo o site. Altere aqui e reflete em todas as seções.

// Domínio oficial do site (metadata, sitemap.xml e robots.txt).
// Defina NEXT_PUBLIC_SITE_URL na hospedagem quando o domínio estiver definido.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const COMPANY_NAME = "D&R Soluções";
export const COMPANY_TAGLINE = "Instalação de câmeras CFTV e monitoramento";
export const COMPANY_SLOGAN = "Mais que câmeras, é tranquilidade!";

// Cidade principal. É o que mais ajuda a aparecer no Google para quem busca
// "instalação de câmeras em <cidade>". Entra no título e nos dados do Google.
export const SERVICE_CITY = "Macaé";
// Área de atendimento, como aparece nos textos do site e na descrição do Google.
export const SERVICE_AREA = "Macaé e região";
// Estado (sigla), usado nos dados estruturados.
export const SERVICE_REGION = "RJ";

// TODO: trocar pelo WhatsApp real da D&R Soluções (somente números, com 55 + DDD).
export const WHATSAPP_NUMBER = "5500000000000";
// TODO: trocar pelo mesmo número, no formato exibido no site.
export const PHONE_DISPLAY = "(00) 00000-0000";

// Verdadeiro enquanto o número acima for o fictício (evita publicar telefone falso nos dados do Google).
export const HAS_REAL_PHONE = !/^550+$/.test(WHATSAPP_NUMBER);

const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento de câmeras CFTV.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MENU_ITEMS = [
  { name: "Serviços", href: "#servicos" },
  { name: "Monitoramento", href: "#monitoramento" },
  { name: "Ambientes", href: "#ambientes" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Contato", href: "#contato" },
];
