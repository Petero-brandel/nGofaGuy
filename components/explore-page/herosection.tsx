"use client"

import { useEffect, useState } from "react"

const HERO_TEXTS = [
  {
    title: "One Platform. Endless Opportunities",
    subtitle:
      "GofaGuy blends errands, jobs, and student-powered delivery into one campus ecosystem.",
  },
  {
    title: "Stores and Food Vendors Now Partner With GofaGuy NG",
    subtitle:
      "Partner with us. Let our #TRUSTED GofaGuys handle your delivery across Minna and beyond.",
  },
  {
    title: "Find your dream company",
    subtitle:
      "Explore top employers and land your ideal role with ease.",
  },
  {
    title: "Your Campus. Your Marketplace",
    subtitle:
      "Explore tasks, jobs, and opportunities tailored to your student community.",
  },
  {
    title: "Search for your next job",
    subtitle:
      "Get the most out of your job search with GofaGuy NG. Discover opportunities, connect, and grow your career.",
  },
]

const CYCLE_MS = 8000
const XFADE_MS = 1600

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [crossfading, setCrossfading] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index)
      setCrossfading(true)
      setIndex((cur) => (cur + 1) % HERO_TEXTS.length)
      setProgressKey((k) => k + 1)
      setTimeout(() => setCrossfading(false), XFADE_MS)
    }, CYCLE_MS)

    return () => clearInterval(interval)
  }, [index])

  const current = HERO_TEXTS[index]
  const previous = HERO_TEXTS[prevIndex]

  return (
    <section
      aria-live="polite"
      className="relative w-full max-w-screen-xl mx-auto h-[220px] sm:h-[260px] rounded-2xl px-4 sm:px-6 md:px-10 py-4 overflow-hidden bg-[#0B0F1A] shadow-xl"
    >
      {/* Soft vignette & shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute -inset-[35%] opacity-[0.05] rounded-[24px] bg-[conic-gradient(from_0deg,rgba(99,102,241,0.35),rgba(59,130,246,0.3),rgba(17,24,39,0.2),rgba(99,102,241,0.35))] animate-aura" />
        <div className="absolute -top-10 -left-12 w-20 h-20 bg-[#1657FD] opacity-[0.18] rounded-full blur-xl animate-drift" />
        <div className="absolute -bottom-10 -right-12 w-16 h-16 bg-[#1657FD] opacity-[0.12] rounded-full blur-xl animate-drift-slow" />
      </div>

      {/* Hairline border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

      {/* Fine grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <div className="relative mx-auto w-full max-w-[44rem] px-1">
          {/* Previous slide */}
          {crossfading && (
            <div key={`prev-${prevIndex}`} className="absolute inset-0" aria-hidden="true">
              <SlideCopy title={previous.title} subtitle={previous.subtitle} state="out" />
            </div>
          )}

          {/* Current slide */}
          <div key={`cur-${index}`}>
            <SlideCopy
              title={current.title}
              subtitle={current.subtitle}
              state={crossfading ? "in" : "stable"}
            />

            {/* Progress bar */}
            <div className="mt-3 h-[3px] w-full max-w-[18rem] mx-auto rounded-full bg-white/10 overflow-hidden">
              <span
                key={progressKey}
                className="block h-full bg-[#1FF3A5] origin-left"
                style={{
                  transformOrigin: "left",
                  animation: `progress ${CYCLE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 .08 .12 .1 0 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          background-size: 200px 200px;
        }

        @keyframes aura {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.01); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .animate-aura { animation: aura 48s linear infinite; }

        @keyframes drift {
          0% { transform: translate3d(0,0,0) }
          50% { transform: translate3d(8px,-5px,0) }
          100% { transform: translate3d(0,0,0) }
        }
        .animate-drift { animation: drift 24s ease-in-out infinite; }
        .animate-drift-slow { animation: drift 32s ease-in-out infinite reverse; }

        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-aura,
          .animate-drift,
          .animate-drift-slow,
          .animate-progress {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function SlideCopy({
  title,
  subtitle,
  state,
}: {
  title: string
  subtitle: string
  state: "in" | "out" | "stable"
}) {
  const base = "transition-all duration-[1600ms] ease-in-out will-change-[transform,opacity,filter]"
  const variants: Record<typeof state, string> = {
    in: "opacity-100 translate-y-0 blur-0",
    out: "opacity-0 translate-y-2 blur-[1px]",
    stable: "opacity-100 translate-y-0 blur-0",
  }

  return (
    <div className={`${base} ${variants[state]}`}>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-1.5 sm:mb-2 text-white/95 line-clamp-2 text-balance">
        {title}
      </h1>
      <p className="text-xs sm:text-sm md:text-base max-w-[36rem] mx-auto text-white/80 px-1.5 sm:px-0 font-medium leading-snug line-clamp-2 text-pretty">
        {subtitle}
      </p>
    </div>
  )
}
