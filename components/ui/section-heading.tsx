import { cn } from '@/lib/utils'

// Cabeçalho padrão das seções: rótulo, título e texto de apoio.
export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'center',
    className,
}: {
    eyebrow: string
    title: string
    description?: string
    align?: 'center' | 'left'
    className?: string
}) {
    return (
        <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            <p className="text-primary inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="bg-primary h-px w-8" aria-hidden="true" />
                {eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
            {description && <p className="text-muted-foreground mt-4 text-lg">{description}</p>}
        </div>
    )
}
