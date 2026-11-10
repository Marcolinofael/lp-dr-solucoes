// SurveillanceBackground — fundo com tema de CFTV: câmeras nos cantos
// varrendo o ambiente com o campo de visão, quadros "CAM 01..04" como em
// uma tela de monitoramento, grade de mosaico e uma linha de varredura.
// Cada elemento é posicionado em relação à tela, então nada é cortado
// em celular ou em monitores largos.
// As animações ficam no globals.css (.cam-pan, .rec-blink, .scan-sweep,
// .grid-drift, .track-move, .signal-ping).

import React from "react"
import { cn } from "@/lib/utils"

const CONE_LENGTH = 600
const CONE_HALF_WIDTH = 180

// Câmeras: canto onde ficam, ângulos entre os quais giram (graus, 0 = direita) e ritmo.
const CAMERAS = [
  { position: "left-6 top-28", from: 5, to: 70, duration: 10, delay: 0 },
  { position: "right-6 top-32", from: 175, to: 110, duration: 12, delay: -3 },
  { position: "right-6 bottom-16", from: 185, to: 250, duration: 14, delay: -5 },
  { position: "left-6 bottom-24", from: -5, to: -70, duration: 13, delay: -2 },
]

// Quadros de câmera, como as janelas de um aplicativo de monitoramento.
const FRAMES = [
  { label: "CAM 01", position: "left-[6%] top-[62%]", visibility: "" },
  { label: "CAM 02", position: "left-[38%] top-[13%]", visibility: "hidden md:block" },
  { label: "CAM 03", position: "right-[6%] top-[56%]", visibility: "" },
  { label: "CAM 04", position: "left-[42%] bottom-[5%]", visibility: "hidden md:block" },
]

const CORNERS = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "right-0 bottom-0 border-r-2 border-b-2",
  "left-0 bottom-0 border-l-2 border-b-2",
]

export function SurveillanceBackground({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden bg-[#050b18]", className)} aria-hidden="true">
      {/* Grade de mosaico */}
      <div className="grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Quadros das câmeras */}
      {FRAMES.map((frame, idx) => (
        <div
          key={frame.label}
          className={cn("absolute h-24 w-36 font-mono text-[10px] tracking-widest md:h-40 md:w-60 md:text-[11px]", frame.position, frame.visibility)}
        >
          {CORNERS.map((corner) => (
            <span key={corner} className={cn("absolute size-4 border-sky-300/25", corner)} />
          ))}
          <span className="absolute left-3 top-2 text-sky-300/35">{frame.label}</span>
          <span className="absolute right-3 top-2 flex items-center gap-1.5 text-white/30">
            <span className="rec-blink size-1.5 rounded-full bg-red-500/70" style={{ animationDelay: `${-idx * 0.45}s` }} />
            REC
          </span>
          {/* Alvo detectado se movendo dentro do quadro */}
          <span
            className="track-move absolute left-[12%] top-[32%] h-[34%] w-[22%] border border-sky-300/35 bg-sky-400/5"
            style={{ animationDuration: `${7 + idx * 1.5}s`, animationDelay: `${-idx * 2.3}s` }}
          />
          {/* Mira no centro do quadro */}
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-sky-300/30" />
          <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-y-1/2 bg-sky-300/30" />
        </div>
      ))}

      {/* Câmeras girando com o campo de visão */}
      {CAMERAS.map((cam, idx) => (
        <svg key={idx} width={1} height={1} className={cn("absolute overflow-visible", cam.position)}>
          <defs>
            <linearGradient id={`sv-cone-${idx}`} gradientUnits="userSpaceOnUse" x1={0} y1={0} x2={CONE_LENGTH} y2={0}>
              <stop offset="0" stopColor="#38bdf8" stopOpacity={0.2} />
              <stop offset="0.55" stopColor="#2563eb" stopOpacity={0.06} />
              <stop offset="1" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g
            className="cam-pan"
            style={{
              "--from": `${cam.from}deg`,
              "--to": `${cam.to}deg`,
              animationDuration: `${cam.duration}s`,
              animationDelay: `${cam.delay}s`,
            } as React.CSSProperties}
          >
            <path d={`M30 0L${CONE_LENGTH} ${-CONE_HALF_WIDTH}V${CONE_HALF_WIDTH}Z`} fill={`url(#sv-cone-${idx})`} />
            {/* Corpo e lente da câmera */}
            <rect x={-8} y={-10} width={42} height={20} rx={5} fill="#0b1a36" stroke="rgba(125,211,252,0.5)" strokeWidth={1.5} />
            <circle cx={25} cy={0} r={5} fill="#38bdf8" fillOpacity={0.6} />
          </g>
          {/* Ondas de sinal */}
          <circle r={70} fill="none" stroke="#38bdf8" strokeOpacity={0.5} strokeWidth={1} className="signal-ping" style={{ animationDelay: `${-idx * 0.7}s` }} />
          <circle r={70} fill="none" stroke="#38bdf8" strokeOpacity={0.5} strokeWidth={1} className="signal-ping" style={{ animationDelay: `${-idx * 0.7 - 1.5}s` }} />
          {/* Suporte */}
          <circle r={5} fill="#050b18" stroke="rgba(125,211,252,0.5)" strokeWidth={1.5} />
        </svg>
      ))}

      {/* Linha de varredura, como em um monitor de CFTV */}
      <div className="scan-sweep absolute inset-x-0 top-0 h-40 bg-linear-to-b from-transparent via-sky-400/8 to-transparent" />

      {/* Escurece o centro para o texto ficar legível e deixa o desenho aparecer nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,11,24,0.88)_0%,rgba(5,11,24,0.6)_55%,rgba(5,11,24,0.15)_100%)]" />
    </div>
  )
}
