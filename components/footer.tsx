import { Logo } from '@/components/logo'
import { COMPANY_NAME, COMPANY_SLOGAN, COMPANY_TAGLINE, MENU_ITEMS, PHONE_DISPLAY, whatsappUrl } from '@/lib/site'

export const Footer = () => {
    return (
        <footer className="text-muted-foreground border-t">
            <div className="container mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Logo className="size-14" />
                            <span className="text-lg font-semibold text-white">{COMPANY_NAME}</span>
                        </div>
                        <p className="max-w-xs text-sm">{COMPANY_TAGLINE}.</p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold text-white">Navegação</h3>
                        <ul className="space-y-2">
                            {MENU_ITEMS.map(item => (
                                <li key={item.href}>
                                    <a href={item.href} className="transition-colors hover:text-white">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold text-white">Contato</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                                    WhatsApp: {PHONE_DISPLAY}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8 text-center text-sm">
                    <p className="text-primary mb-2 font-medium tracking-widest uppercase">{COMPANY_SLOGAN}</p>
                    <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
