'use client'
import React from 'react'
import { Award, Handshake, MessageCircle, Timer } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { COMPANY_SLOGAN, PHONE_DISPLAY, whatsappUrl } from '@/lib/site'

const differentials = [
    { icon: Award, name: 'Atendimento personalizado' },
    { icon: Handshake, name: 'Confiança e credibilidade' },
    { icon: Timer, name: 'Agilidade na instalação' },
]

export const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const message = formData.get('message') as string;

        window.open(whatsappUrl(`Olá, meu nome é ${name}. ${message}`), '_blank');
    };

    return (
        <section id="contato" className="scroll-mt-24 py-20 text-white lg:py-28">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="from-primary/25 via-card/80 to-card/60 mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-3xl border bg-linear-to-br p-8 backdrop-blur-md sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                        <div>
                            <p className="text-primary inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase">
                                <span className="bg-primary h-px w-8" aria-hidden="true" />
                                Contato
                            </p>
                            <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">Solicite seu orçamento!</h2>
                            <p className="text-muted-foreground mt-4 text-lg">{COMPANY_SLOGAN}</p>

                            <ul className="mt-8 space-y-4">
                                {differentials.map(({ icon: Icon, name }) => (
                                    <li key={name} className="flex items-center gap-3 font-medium">
                                        <span className="border-primary/30 bg-primary/10 flex size-10 items-center justify-center rounded-lg border">
                                            <Icon className="text-primary size-5" />
                                        </span>
                                        {name}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={whatsappUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-10 inline-flex items-center gap-4"
                            >
                                <span className="flex size-12 items-center justify-center rounded-full bg-[#25D366]">
                                    <MessageCircle className="size-6 text-white" />
                                </span>
                                <span>
                                    <span className="text-muted-foreground block text-sm">WhatsApp</span>
                                    <span className="group-hover:text-primary block text-lg font-semibold transition-colors">{PHONE_DISPLAY}</span>
                                </span>
                            </a>
                        </div>

                        <form className="bg-background/70 space-y-6 rounded-2xl border p-6 sm:p-8" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome</Label>
                                <Input id="name" name="name" placeholder="Seu nome" autoComplete="name" className="h-11 bg-transparent" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea id="message" name="message" placeholder="Ex.: quero instalar câmeras na minha casa" className="min-h-[150px] bg-transparent" required />
                            </div>
                            <Button type="submit" size="lg" className="h-12 w-full text-base">
                                <MessageCircle />
                                Enviar pelo WhatsApp
                            </Button>
                            <p className="text-muted-foreground text-center text-xs">
                                Ao enviar, o WhatsApp abre com a sua mensagem pronta.
                            </p>
                        </form>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
