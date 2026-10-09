import { SectionHeader, NeonButton } from './ui.jsx'

const stats = [
  { label: 'accuracy', value: '99.4%' },
  { label: 'fps', value: '60' },
  { label: 'latency', value: '2 ms' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-14 pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,85,0.22),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-full opacity-30 grid-bg" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-display text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/70">
              Cyborg Sports Lab · Exhibit 07
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-black uppercase tracking-[0.08em] text-white md:text-6xl xl:text-7xl">
              <span className="block text-glow-crimson text-crimson">Arena</span>
              <span className="block text-white">Guardian</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg font-medium text-white/70 md:text-xl">
              A dark-futurist arena where human athleticism gets measured by machine precision, computer vision, and adaptive AI opponents.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <NeonButton variant="crimson" onClick={() => document.getElementById('play-zone')?.scrollIntoView({ behavior: 'smooth' })}>
                Play Now
              </NeonButton>
              <NeonButton variant="ghost" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Tech
              </NeonButton>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-crimson/20 blur-3xl" />
            <div className="glass-deep relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,45,85,0.25),transparent_45%)]" />
              <div className="relative">
                <div className="mx-auto aspect-square w-full max-w-[360px] rounded-full border border-crimson/30 bg-[radial-gradient(circle_at_center,#0f1118_0%,#090b11_40%,#050507_100%)] shadow-[0_0_45px_rgba(255,45,85,0.18)]">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-[82%] w-[82%] rounded-full border border-crimson/40 bg-[radial-gradient(circle_at_50%_35%,rgba(255,90,90,0.8),rgba(255,45,85,0.5) 25%,rgba(5,5,7,0.9) 70%)] shadow-[inset_0_0_30px_rgba(255,45,85,0.3),0_0_28px_rgba(255,45,85,0.25)]">
                      <div className="absolute left-1/2 top-1/2 h-[44%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[42%_42%_46%_46%] border border-white/10 bg-[#1b0d12]/90" />
                      <div className="absolute left-1/2 top-[18%] h-[20%] w-[44%] -translate-x-1/2 rounded-[48%_48%_40%_40%] border border-white/10 bg-[#251018]/90" />
                      <div className="absolute left-[25%] top-[30%] h-[14%] w-[18%] rounded-full bg-[#ff3c58] shadow-[0_0_20px_rgba(255,45,85,0.9)]" />
                      <div className="absolute right-[25%] top-[30%] h-[14%] w-[18%] rounded-full bg-[#ff3c58] shadow-[0_0_20px_rgba(255,45,85,0.9)]" />
                      <div className="absolute left-1/2 top-[48%] h-[12%] w-[30%] -translate-x-1/2 rounded-b-[40%] border border-white/10 bg-[#1e1a1e]/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl border border-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-[9px] tracking-[0.24em] uppercase text-white/45">{stat.label}</p>
              <p className="mt-1 font-display text-lg font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
