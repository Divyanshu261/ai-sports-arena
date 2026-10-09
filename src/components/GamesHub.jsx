import { GameFrame, Meter, NeonButton, StatChip } from './ui.jsx'

const GAMES = [
  { key: 'neuro', title: 'NeuroKeeper 2030', tag: 'featured', accent: 'crimson', blurb: 'Adaptive penalty shootout with live-aim reading and a mercy-mode training loop.', score: '1,450 pts' },
  { key: 'reaction', title: 'Reaction Speed Test', tag: 'timing', accent: 'cyber', blurb: 'React to random cues and lock in your athlete profile.', score: '163 ms' },
  { key: 'goalkeeper', title: 'Adaptive AI Goalkeeper', tag: 'analytics', accent: 'pitch', blurb: 'The keeper learns your shot pattern in real time.', score: '93%' },
  { key: 'tictactoe', title: 'Minimax Tic-Tac-Toe', tag: 'strategy', accent: 'gold', blurb: 'Beat the unbeatable solver in a physics-free duel of pattern recognition.', score: 'win rate 52%' },
  { key: 'aim', title: 'Aim Trainer', tag: 'precision', accent: 'cyber', blurb: 'Track multiple moving targets under pressure.', score: '94%' },
  { key: 'pose', title: 'CV Pose Challenge', tag: 'vision', accent: 'crimson', blurb: 'Match your stance to the silhouette in real time.', score: '91%' },
]

export default function GamesHub({ onFinish }) {
  return (
    <section id="play-zone" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,255,135,0.06), transparent 70%)' }} />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="clip-tag inline-block border border-pitch/40 bg-pitch/10 px-4 py-1 font-display text-[10px] tracking-[0.35em] uppercase text-pitch text-glow-pitch">Section A · Play Zone</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-black uppercase tracking-wide text-white">8 AI Mini-Games</h2>
          </div>
          <StatChip label="Arena load" value="stable" accent="pitch" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {GAMES.map((game) => (
            <GameFrame key={game.key} title={game.title} tag={game.tag} tagAccent={game.accent} blurb={game.blurb} hud={<StatChip label="Best" value={game.score} accent={game.accent} />}>
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                    <span>Session</span>
                    <span>Live</span>
                  </div>
                  <Meter value={game.key === 'neuro' ? 82 : game.key === 'reaction' ? 74 : game.key === 'goalkeeper' ? 79 : game.key === 'tictactoe' ? 62 : game.key === 'aim' ? 88 : 70} accent={game.accent === 'crimson' ? '#ff2d55' : game.accent === 'pitch' ? '#00ff87' : game.accent === 'cyber' ? '#00d4ff' : '#ffc53d'} marker={68} />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/45">Difficulty</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className={`h-2.5 w-6 rounded-full ${i < (game.key === 'reaction' ? 3 : 2) ? 'bg-pitch' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>

                <NeonButton
                  variant={game.accent === 'pitch' ? 'pitch' : game.accent === 'cyber' ? 'cyber' : 'crimson'}
                  onClick={() =>
                    onFinish?.({
                      game: game.title,
                      display: game.score,
                      points: 90 + Math.round(Math.random() * 10),
                    })
                  }
                  className="w-full justify-center text-center"
                >
                  Launch Match
                </NeonButton>
              </div>
            </GameFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
