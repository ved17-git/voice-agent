import Script from 'next/script';

const topics = [
  {
    icon: '🏚',
    title: 'Off-market listings',
    desc: 'Pocket listings like the 24-unit complex at 880 Westheimer Rd — not on MLS',
  },
  {
    icon: '📊',
    title: 'Investment underwriting',
    desc: 'Pro-formas, cap rates, NOI, and IRR targets like the Pinnacle Heights acquisition',
  },
  {
    icon: '👤',
    title: 'Active buyer profiles',
    desc: 'HNW clients with live 1031 exchange windows and pre-approval limits up to $6.5M',
  },
  {
    icon: '🗺️',
    title: 'Zoning intelligence',
    desc: 'Upcoming TOD ordinances and upzoning opportunities in District 4 Riverfront',
  },
  {
    icon: '🔧',
    title: 'Vendor & renovation costs',
    desc: 'Apex Commercial Builders SLA — unit turn pricing, penalties, and discount rates',
  },
];

const prompts = [
  'Tell me about the off-market listing at 880 Westheimer Rd',
  'What are the financials for the Pinnacle Heights acquisition?',
  'Is there an active buyer looking for a 1031 exchange right now?',
  'What zoning changes are coming in District 4 Riverfront?',
  'How much does a heavy unit turn cost with Apex Commercial Builders?',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-zinc-800 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full mb-5 border border-zinc-700">
            🏢 Internal Intelligence
          </span>
          <h1 className="text-3xl font-medium mb-3 text-white">Real estate advisory agent</h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto">
            Query off-market listings, buyer profiles, investment pro-formas, zoning intel, and vendor pricing — all from your internal knowledge base.
          </p>
        </div>

        {/* Topics */}
        <p className="text-xs text-zinc-500 font-medium tracking-widest mb-4">KNOWLEDGE BASE COVERS</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {topics.map((t) => (
            <div
              key={t.title}
              className="border border-zinc-800 rounded-xl p-4 bg-zinc-900 hover:border-zinc-600 transition-colors"
            >
              <div className="text-xl mb-2">{t.icon}</div>
              <p className="text-sm font-medium text-zinc-100 mb-1">{t.title}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Prompts */}
        <p className="text-xs text-zinc-500 font-medium tracking-widest mb-4">TRY ASKING</p>
        <div className="flex flex-col gap-2 mb-12">
          {prompts.map((p) => (
            <button
              key={p}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-left text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 flex items-center justify-between transition-colors"
            >
              {p}
              <span className="text-zinc-600 ml-3 shrink-0">→</span>
            </button>
          ))}
        </div>

        <hr className="border-zinc-800 mb-10" />

        {/* Embed CTA */}
        <div className="text-center">
          <p className="text-base font-medium text-white mb-1">Ready to talk?</p>
          <p className="text-sm text-zinc-500 mb-4">
            Click the mic button to start a voice session with the advisor.
          </p>
          <p className="text-xs text-zinc-600">🔒 Conversations are confidential and not logged externally</p>
        </div>
      </div>
    </main>
  );
}