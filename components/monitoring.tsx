import Link from 'next/link'
import { ChevronLeft, Ellipsis, Eye, History, MessageCircle, Monitor, Router, Smartphone, Tablet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { whatsappUrl } from '@/lib/site'

const devices = [
    { icon: Smartphone, name: 'Celular' },
    { icon: Tablet, name: 'Tablet' },
    { icon: Monitor, name: 'PC' },
]

// Imagens ilustrativas das câmeras (apenas gradientes, sem fotos).
const feeds = [
    { label: 'CAM 1', scene: 'from-slate-700 via-slate-800 to-blue-950' },
    { label: 'CAM 2', scene: 'from-emerald-800 via-emerald-950 to-slate-900' },
    { label: 'CAM 3', scene: 'from-sky-900 via-slate-800 to-slate-950' },
    { label: 'CAM 4', scene: 'from-amber-900 via-stone-800 to-slate-950' },
]

const tabs = [
    { icon: Eye, name: 'Ao vivo', active: true },
    { icon: History, name: 'Reprodução', active: false },
    { icon: Router, name: 'Dispositivos', active: false },
    { icon: Ellipsis, name: 'Mais', active: false },
]

function PhoneMockup() {
    return (
        <div className="relative mx-auto w-[17rem]" aria-hidden="true">
            {/* Brilho atrás do aparelho */}
            <div className="bg-primary/25 absolute -inset-10 rounded-full blur-3xl" />
            <div className="relative rounded-[2.75rem] border-[6px] border-slate-700 bg-black p-1.5 shadow-2xl shadow-black/60">
                <div className="overflow-hidden rounded-[2.1rem] bg-[#0a1120]">
                    {/* Alto-falante */}
                    <div className="flex justify-center pt-2.5">
                        <span className="h-4 w-20 rounded-full bg-black" />
                    </div>
                    <div className="flex items-center justify-between px-4 pt-3 pb-3 text-white">
                        <ChevronLeft className="size-4 opacity-70" />
                        <span className="text-sm font-semibold">Câmeras</span>
                        <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider text-red-400">
                            <span className="rec-blink size-1.5 rounded-full bg-red-500" />
                            REC
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 px-1.5">
                        {feeds.map((feed) => (
                            <div key={feed.label} className={`relative aspect-[4/5] overflow-hidden rounded-md bg-linear-to-br ${feed.scene}`}>
                                {/* Linhas de perspectiva sugerindo o ambiente filmado */}
                                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent" />
                                <span className="absolute bottom-0 left-1/2 h-2/3 w-px origin-bottom -rotate-[28deg] bg-white/15" />
                                <span className="absolute bottom-0 left-1/2 h-2/3 w-px origin-bottom rotate-[28deg] bg-white/15" />
                                <span className="absolute top-1.5 left-1.5 rounded bg-black/50 px-1 font-mono text-[8px] tracking-wider text-white/80">{feed.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 grid grid-cols-4 border-t border-white/10 px-1 py-2.5">
                        {tabs.map(({ icon: Icon, name, active }) => (
                            <span key={name} className={`flex flex-col items-center gap-1 text-[8px] ${active ? 'text-sky-400' : 'text-white/45'}`}>
                                <Icon className="size-4" />
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Monitoring() {
    return (
        <section id="monitoramento" className="scroll-mt-24 py-20 text-white lg:py-28">
            <div className="container mx-auto px-6">
                <div className="bg-card/60 mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-3xl border p-8 backdrop-blur-md sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                    <Reveal>
                        <SectionHeading
                            align="left"
                            eyebrow="Monitoramento 24 horas"
                            title="Acompanhe de onde estiver!"
                            description="Veja as imagens das suas câmeras pelo celular, tablet e PC."
                        />
                        <ul className="mt-8 flex flex-wrap gap-3">
                            {devices.map(({ icon: Icon, name }) => (
                                <li key={name} className="bg-background/60 flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium">
                                    <Icon className="text-primary size-4" />
                                    {name}
                                </li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="mt-10 rounded-full px-8">
                            <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                                <MessageCircle />
                                Solicite seu orçamento
                            </Link>
                        </Button>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <PhoneMockup />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
