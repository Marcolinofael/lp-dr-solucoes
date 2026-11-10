import { Building2, House, Store, Warehouse } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const environments = [
    { icon: House, name: 'Residências' },
    { icon: Store, name: 'Comércios' },
    { icon: Building2, name: 'Empresas' },
    { icon: Warehouse, name: 'Condomínios' },
]

export function Environments() {
    return (
        <section id="ambientes" className="scroll-mt-24 py-20 text-white lg:py-28">
            <div className="container mx-auto px-6">
                <Reveal>
                    <SectionHeading
                        eyebrow="Ambientes"
                        title="Soluções completas"
                        description="Para todos os tipos de ambientes."
                    />
                </Reveal>

                <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">
                    {environments.map(({ icon: Icon, name }, idx) => (
                        <li key={name}>
                            <Reveal delay={idx * 0.07}>
                                <div className="group bg-card/70 hover:border-primary/50 flex flex-col items-center gap-5 rounded-2xl border px-4 py-10 text-center backdrop-blur-md transition-colors duration-300">
                                    <span className="border-primary/40 bg-background/60 group-hover:bg-primary/15 flex size-20 items-center justify-center rounded-full border-2 transition-colors duration-300">
                                        <Icon className="text-primary size-9" />
                                    </span>
                                    <span className="text-sm font-semibold tracking-[0.2em] uppercase">{name}</span>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
