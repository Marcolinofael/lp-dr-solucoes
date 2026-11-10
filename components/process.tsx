import { ClipboardList, MessageCircle, Wrench, Zap } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
    {
        icon: MessageCircle,
        title: 'Orçamento',
        description: 'Solicite seu orçamento pelo WhatsApp.',
    },
    {
        icon: ClipboardList,
        title: 'Projeto',
        description: 'Atendimento personalizado para o seu ambiente.',
    },
    {
        icon: Zap,
        title: 'Instalação',
        description: 'Agilidade na instalação, com equipamentos de qualidade.',
    },
    {
        icon: Wrench,
        title: 'Manutenção',
        description: 'Suporte técnico especializado sempre que precisar.',
    },
]

export function Process() {
    return (
        <section id="como-funciona" className="scroll-mt-24 py-20 text-white lg:py-28">
            <div className="container mx-auto px-6">
                <Reveal>
                    <SectionHeading eyebrow="Como funciona" title="Do projeto à manutenção" />
                </Reveal>

                <ol className="relative mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map(({ icon: Icon, title, description }, idx) => (
                        <li key={title} className="h-full">
                            <Reveal delay={idx * 0.08} className="bg-card/70 relative h-full rounded-2xl border p-7 backdrop-blur-md">
                                <span className="bg-background border-primary/40 relative flex size-[4.5rem] items-center justify-center rounded-2xl border">
                                    <Icon className="text-primary size-8" />
                                    <span className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full text-xs font-bold">
                                        {idx + 1}
                                    </span>
                                </span>
                                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                                <p className="text-muted-foreground mt-2">{description}</p>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
