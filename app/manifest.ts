import type { MetadataRoute } from 'next'

// Permite "Adicionar à tela inicial" no celular com nome, ícone e cores corretos.
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'D&R Soluções',
        short_name: 'D&R',
        description: 'Instalação de câmeras CFTV e monitoramento.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050b18',
        theme_color: '#050b18',
        icons: [
            { src: '/icon.png', sizes: '512x512', type: 'image/png' },
            { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    }
}
