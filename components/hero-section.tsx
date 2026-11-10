'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Cctv, MessageCircle, MonitorSmartphone } from 'lucide-react'
import { TextEffect } from '@/components/ui/text-effect'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { COMPANY_NAME, COMPANY_TAGLINE, whatsappUrl } from '@/lib/site'

const fadeInBlur = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const serviceBadges = [
    { icon: Cctv, title: 'Câmeras CFTV', subtitle: 'Residencial e comercial', position: '-left-16 -bottom-6', delay: 1.6 },
    { icon: MonitorSmartphone, title: 'Monitoramento 24 horas', subtitle: 'Celular, tablet e PC', position: '-right-10 -top-4 xl:-right-14', delay: 1.8 },
]

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main id='inicio' className="relative flex min-h-svh flex-col overflow-hidden">
                <section className="relative z-10 flex flex-1 flex-col items-center justify-center pt-28 pb-10 text-white">
                    <div className="container mx-auto px-6 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
                        <div className="text-center sm:mx-auto lg:mx-0 lg:text-left">
                            {/* No celular a logo aparece aqui; no desktop ela fica na coluna da direita */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInBlur}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="lg:hidden"
                            >
                                <Image
                                    src="/img/dr-logo.png"
                                    alt={COMPANY_NAME}
                                    width={640}
                                    height={640}
                                    sizes="208px"
                                    className="mx-auto mb-8 size-52"
                                    priority
                                />
                            </motion.div>
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={fadeInBlur}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase sm:text-sm"
                            >
                                <Cctv className="size-4" />
                                {COMPANY_TAGLINE}
                            </motion.p>
                            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold md:text-7xl lg:mx-0 lg:text-6xl xl:text-7xl">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    delay={0.5}
                                >
                                    Sua segurança é a
                                </TextEffect>{' '}
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInBlur}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    className="inline-block bg-linear-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text -mb-[0.25em] pb-[0.25em] text-transparent"
                                >
                                    nossa prioridade
                                </motion.span>
                            </h1>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={1.1}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-balance text-lg font-medium text-white/75 md:text-xl lg:mx-0">
                                Instalação de câmeras CFTV e monitoramento 24 horas para você acompanhar tudo de onde estiver, pelo celular, tablet ou PC.
                            </TextEffect>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInBlur}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                            >
                                <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                                    <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle />
                                        Solicite seu orçamento
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="w-full rounded-full border-white/30 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:w-auto dark:border-white/30 dark:bg-white/5 dark:hover:bg-white/15">
                                    <Link href="#servicos">
                                        Ver serviços
                                        <ArrowRight />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Logo grande: só no desktop, para não empurrar o conteúdo no celular */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, filter: 'blur(12px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative mx-auto hidden w-fit lg:block"
                        >
                            {/* Brilho azul da logo atrás do círculo */}
                            <div className="absolute -inset-10 rounded-full bg-linear-to-br from-sky-400/30 via-blue-600/20 to-sky-500/30 blur-3xl" aria-hidden="true" />
                            <Image
                                src="/img/dr-logo.png"
                                alt={COMPANY_NAME}
                                width={640}
                                height={640}
                                sizes="(min-width: 1024px) 30rem, 0px"
                                className="relative size-[min(60vh,30rem)] drop-shadow-2xl"
                                priority
                            />
                            {serviceBadges.map(({ icon: Icon, title, subtitle, position, delay }) => (
                                <motion.div
                                    key={title}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInBlur}
                                    transition={{ duration: 0.8, delay }}
                                    className={`absolute ${position} bg-card/85 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md`}
                                >
                                    <span className="bg-primary/15 flex size-10 items-center justify-center rounded-xl">
                                        <Icon className="text-primary size-5" />
                                    </span>
                                    <span className="text-left">
                                        <span className="block text-sm font-semibold">{title}</span>
                                        <span className="text-muted-foreground block text-xs">{subtitle}</span>
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Faixa com os ambientes atendidos */}
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={fadeInBlur}
                        transition={{ duration: 0.8, delay: 1.9 }}
                        className="container mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 px-6 pt-8 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase lg:mt-16 lg:justify-between"
                    >
                        <li className="text-primary w-full text-center lg:w-auto">Soluções completas para</li>
                        {['Residências', 'Comércios', 'Empresas', 'Condomínios'].map((name) => (
                            <li key={name} className="flex items-center gap-2">
                                <span className="bg-primary size-1.5 rounded-full" aria-hidden="true" />
                                {name}
                            </li>
                        ))}
                    </motion.ul>
                </section>
            </main>
        </>
    )
}
