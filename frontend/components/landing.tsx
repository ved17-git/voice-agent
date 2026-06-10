import Script from 'next/script';

const topics = [
  { icon: '🏚', title: 'Off-market listings', desc: 'Exclusive pocket listings not available on MLS' },
  { icon: '📈', title: 'Investment analysis', desc: 'Cap rates, NOI, IRR, and pro-forma breakdowns' },
  { icon: '📍', title: 'Zoning intelligence', desc: 'Upcoming ordinances and land use changes' },
  { icon: '👥', title: 'Buyer profiles', desc: 'Active HNW buyers with 1031 exchange timelines' },
  { icon: '🔧', title: 'Vendor pricing', desc: 'Contractor SLAs, renovation costs, and turnaround times' },
];

const prompts = [
  'Tell me about any off-market multi-family listings available right now',
  'What is the projected IRR and cap rate for the Pinnacle Heights acquisition?',
  'Are there any buyers currently looking for 1031 exchange properties?',
  'What zoning changes are coming up in District 4 Riverfront?',
  'What are the renovation costs and SLA terms with Apex Commercial Builders?',
];

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-5">
            🏢 Real Estate Intelligence
          </span>
          <h1 className="text-3xl font-medium mb-3">Your AI real estate advisor</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
            Ask anything about off-market listings, investment analysis, zoning intel, and exclusive buyer opportunities.
          </p>
        </div>

        {/* Topics */}
        <p className="text-xs text-gray-400 font-medium tracking-widest mb-4">WHAT I KNOW ABOUT</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {topics.map((t) => (
            <div key={t.title} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors">
              <div className="text-xl mb-2">{t.icon}</div>
              <p className="text-sm font-medium mb-1">{t.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Prompts */}
        <p className="text-xs text-gray-400 font-medium tracking-widest mb-4">TRY ASKING</p>
        <div className="flex flex-col gap-2 mb-12">
          {prompts.map((p) => (
            <button
              key={p}
              className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm text-left text-gray-700 hover:border-gray-200 flex items-center justify-between transition-colors"
            >
              {p}
              <span className="text-gray-400 ml-3 shrink-0">→</span>
            </button>
          ))}
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Embed CTA */}
        <div className="text-center">
          <p className="text-base font-medium mb-1">Ready to talk?</p>
          <p className="text-sm text-gray-400 mb-4">Click the button below to start a voice conversation with your advisor.</p>
          <p className="text-xs text-gray-400">🔒 All conversations are private and confidential</p>
        </div>
      </div>

      <Script
        src="https://cloud.livekit.io/embed-popup.js"
        data-lk-agent="CA_rXQnHbSdMyBx"
        async
      />
    </main>
  );
}