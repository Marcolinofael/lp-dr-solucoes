import Image from 'next/image'
import { cn } from '@/lib/utils'
import { COMPANY_NAME } from '@/lib/site'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/img/dr-logo.png"
            alt={COMPANY_NAME}
            width={640}
            height={640}
            sizes="96px"
            className={cn('size-12', className)}
        />
    )
}
