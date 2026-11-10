import Link from 'next/link'
import { ArrowUpRight, Cctv, MonitorSmartphone, Settings, ShieldCheck, Wrench } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { whatsappUrl } from '@/lib/site'

const services = [
    {
        icon: Cctv,
        title: 'Instalação de câmeras CFTV',
        description: 'Residencial e comercial.',
    },
    {
        icon: MonitorSmartphone,
        title: 'Monitoramento 24 horas',
        description: 'Pelo celular, tablet e PC.',
    },
    {
        icon: ShieldCheck,
        title: 'Mais segurança',
        description: 'Para você, sua família e seu patrimônio.',
    },
    {
        icon: Settings,
        title: 'Equipamentos de qualidade',
        description: 'Com as melhores marcas.',
    },
    {
        icon: Wrench,
        title: 'Suporte técnico especializado',
        description: 'Do projeto à manutenção.',
    },
]

export function Services() {
    return (
        <section id="servicos" className="scroll-mt-24 py-20 text-white lg:py-28">
            <div className="container mx-auto px-6">
                <Reveal>
                    <SectionHeading
                        eyebrow="Serviços"
                        title="Instalação de câmeras CFTV e monitoramento"
                        description="Sua segurança é a nossa prioridade."
                    />
                </Reveal>

                <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ icon: Icon, title, description }, idx) => (
                        <Reveal key={title} delay={idx * 0.06} className="h-full">
                            <article className="group bg-card/70 hover:border-primary/50 relative h-full overflow-hidden rounded-2xl border p-7 backdrop-blur-md transition-colors duration-300">
                                {/* Filete de luz que acende ao passar o mouse */}
                                <span className="via-primary absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                                <div className="flex items-start justify-between">
                                    <span className="border-primary/30 bg-primary/10 flex size-14 items-center justify-center rounded-xl border">
                                        <Icon className="text-primary size-7" />
                                    </span>
                                    <span className="font-mono text-sm text-white/25">0{idx + 1}</span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                                <p className="text-muted-foreground mt-2">{description}</p>
                            </article>
                        </Reveal>
                    ))}

                    {/* Cartão de chamada para fechar a grade */}
                    <Reveal delay={services.length * 0.06} className="h-full">
                        <Link
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group from-primary to-blue-600 text-primary-foreground flex h-full flex-col justify-between rounded-2xl bg-linear-to-br p-7 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <ArrowUpRight className="size-8 self-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold">Solicite seu orçamento!</h3>
                                <p className="mt-2 font-medium opacity-80">Fale com a gente pelo WhatsApp.</p>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
