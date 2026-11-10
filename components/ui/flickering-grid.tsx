"use client"

// FlickeringGrid — malha de quadrados que acendem e apagam aleatoriamente,
// como LEDs de um servidor. Um único <canvas> que preenche o elemento pai.

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type FlickeringGridProps = {
  className?: string
  /** Tamanho de cada quadrado, em px */
  squareSize?: number
  /** Espaço entre os quadrados, em px */
  gridGap?: number
  /** Chance (por segundo) de cada quadrado trocar de brilho */
  flickerChance?: number
  /** Cor dos quadrados, no formato "r, g, b" */
  color?: string
  /** Opacidade máxima de um quadrado aceso */
  maxOpacity?: number
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "255, 255, 255",
  maxOpacity = 0.3,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let cols = 0
    let rows = 0
    let squares = new Float32Array(0)
    let dpr = 1
    let raf = 0
    let lastTime = 0
    let visible = document.visibilityState === "visible"
    let inView = true

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      cols = Math.ceil(width / (squareSize + gridGap))
      rows = Math.ceil(height / (squareSize + gridGap))
      squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const size = squareSize * dpr
      const step = (squareSize + gridGap) * dpr
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          ctx.fillStyle = `rgba(${color}, ${squares[x * rows + y]})`
          ctx.fillRect(x * step, y * step, size, size)
        }
      }
    }

    const frame = (time: number) => {
      raf = 0
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.1) : 0
      lastTime = time
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * dt) squares[i] = Math.random() * maxOpacity
      }
      draw()
      requestFrame()
    }

    function requestFrame() {
      if (!reducedMotion && visible && inView && raf === 0) raf = requestAnimationFrame(frame)
    }

    const stop = () => {
      if (raf !== 0) cancelAnimationFrame(raf)
      raf = 0
      lastTime = 0
    }

    setup()
    draw()
    requestFrame()

    const resizeObserver = new ResizeObserver(() => {
      setup()
      draw()
    })
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry?.isIntersecting ?? true
      if (inView) requestFrame()
      else stop()
    })
    intersectionObserver.observe(canvas)

    const onVisibilityChange = () => {
      visible = document.visibilityState === "visible"
      if (visible) requestFrame()
      else stop()
    }
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [squareSize, gridGap, flickerChance, color, maxOpacity])

  return <canvas ref={canvasRef} className={cn("block size-full", className)} />
}
