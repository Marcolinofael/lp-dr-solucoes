import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

// Botão flutuante de WhatsApp, sempre visível no canto da tela.
export function WhatsAppButton() {
    return (
        <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicite seu orçamento pelo WhatsApp"
            className="fixed right-5 bottom-5 z-30 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110"
        >
            <MessageCircle className="size-7" />
        </a>
    )
}
