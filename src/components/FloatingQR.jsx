import { useState } from 'react'

export default function FloatingQR({ qrUrl }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="glass-deep flex items-center gap-3 rounded-full border border-cyber/40 px-3 py-2 shadow-[0_0_30px_rgba(0,212,255,0.18)] transition hover:border-cyber/60"
      >
        <span className="font-display text-[10px] tracking-[0.25em] uppercase text-cyber">QR</span>
        {qrUrl ? <img src={qrUrl} alt="Arena QR code" className="h-10 w-10 rounded-md bg-white p-1" /> : <div className="h-10 w-10 animate-pulse rounded-md bg-slate-200" />}
      </button>

      {expanded && (
        <div className="glass-deep absolute bottom-16 right-0 w-52 rounded-2xl border border-white/10 p-3 shadow-[0_0_30px_rgba(0,212,255,0.18)]">
          <p className="font-display text-[9px] tracking-[0.25em] uppercase text-white/50">Arena Code</p>
          {qrUrl ? <img src={qrUrl} alt="QR code" className="mt-2 w-full rounded-xl bg-white p-2" /> : <div className="mt-2 h-36 w-full animate-pulse rounded-xl bg-slate-200" />}
        </div>
      )}
    </div>
  )
}
