'use client'

import Navbar from '../components/Navbar'

const STATUS_STYLES = {
  live: { label: 'Live', color: '#5ac8a8' },
  building: { label: 'Building', color: '#e0a458' },
  parked: { label: 'Parked', color: '#666' },
}

export default function Holdings() {
  const holdings = [
    {
      name: 'Sorano',
      domain: 'sorano.space',
      description: 'Roadmap, changelog, and community votes for your product. Share what you are building, let users vote on what is next, publish a changelog when you ship.',
      stage: 'Shipping',
      status: 'live',
      href: 'https://sorano.space',
      updatedAt: '2026-06-20',
    },
    {
      name: 'TWO Docs',
      domain: 'two.so',
      description: 'The doc app built for iPad and Mac. Beautiful, focused writing for creatives and solo operators.',
      stage: 'Shipping',
      status: 'live',
      href: 'https://www.two.so',
      updatedAt: '2026-07-14',
    },
    {
      name: 'Kiroka',
      domain: 'kiroka.xyz',
      description: 'A curated directory of tools and products for indie builders and operators.',
      stage: 'Daily drip',
      status: 'building',
      href: 'https://app.kiroka.xyz',
      updatedAt: '2026-07-15',
    },
    {
      name: 'Aegos Intel',
      domain: 'aegosintel.com',
      description: 'Company intelligence and data platform. Structured business insights for operators and analysts.',
      stage: 'In progress',
      status: 'building',
      href: 'https://aegosintel.com',
      updatedAt: '2026-07-10',
    },
    {
      name: 'Study Brew',
      domain: 'studybrew.co',
      description: 'An English learning platform for B1\u2013B2 learners, built around short audio stories with real characters and everyday situations.',
      stage: 'In progress',
      status: 'building',
      href: 'https://studybrew.co',
      updatedAt: '2026-05-15',
    },
    {
      name: 'Strevius',
      domain: 'strevius.com',
      description: "Your company's operating memory. Strevius begins as a knowledge base and grows into the structured record of how your company runs.",
      stage: 'Dashboard',
      status: 'building',
      href: 'https://strevius.com',
      updatedAt: '2026-07-01',
    },
    {
      name: 'KiraPulse',
      domain: 'kirapulse.com',
      description: 'Domain monitoring tool. Track availability, expiry, and changes across the domains that matter.',
      stage: 'In progress',
      status: 'building',
      href: 'https://kirapulse.com',
      updatedAt: '2026-06-10',
    },
    {
      name: 'Liyo',
      domain: 'liyo.dev',
      description: 'Studio and experiments arm. Building small internet projects on a hit-and-miss principle.',
      stage: 'Experiments',
      status: 'parked',
      href: 'https://liyo.dev',
      updatedAt: '2026-04-02',
    },
  ]

  const isRecent = (dateStr: string) => {
    const updated = new Date(dateStr).getTime()
    const hoursSince = (Date.now() - updated) / (1000 * 60 * 60)
    return hoursSince >= 0 && hoursSince <= 48
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .h-section { padding-left: 24px !important; padding-right: 24px !important; }
          .h-hero { padding-top: 80px !important; }
          .h-hero h1 { font-size: 48px !important; }
          .h-hero p { font-size: 19px !important; line-height: 30px !important; }
          .board-row { grid-template-columns: 1.4fr 1fr !important; row-gap: 6px !important; }
          .board-stage { display: none !important; }
          .board-domain { grid-column: 1 / -1 !important; }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="h-hero h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Holdings</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          The whole shelf.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px' }}>
          Everything we build and operate &mdash; products in beta, live tools, and studio experiments. Each one owned and run in-house.
        </p>
      </div>

      {/* Divider */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Board */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em' }}>Live board</p>
          <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em' }}>{holdings.length} brands tracked</p>
        </div>

        <div style={{ border: '0.5px solid #1a3050', borderRadius: '10px', overflow: 'hidden' }}>
          {/* Header row */}
          <div
            className="board-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
              padding: '12px 24px',
              borderBottom: '0.5px solid #1a3050',
            }}
          >
            <span style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em' }}>Brand</span>
            <span style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em' }}>Status</span>
            <span className="board-stage" style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em' }}>Stage</span>
            <span className="board-domain" style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em' }}>Destination</span>
          </div>

          {holdings.map((h, i) => {
            const s = STATUS_STYLES[h.status as keyof typeof STATUS_STYLES]
            const recent = isRecent(h.updatedAt)
            return (
              <a
                key={h.name}
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  padding: '18px 24px',
                  borderBottom: i === holdings.length - 1 ? 'none' : '0.5px solid #16263a',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1d2c')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div className="board-row" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 700, color: '#f0f0f0' }}>
                    {h.name}
                    {recent && (
                      <span
                        title={`Updated ${h.updatedAt}`}
                        style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5ac8a8', flexShrink: 0 }}
                      />
                    )}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: s.color, letterSpacing: '0.03em' }}>
                    {s.label}
                  </span>
                  <span className="board-stage" style={{ fontSize: '13px', color: '#889' }}>{h.stage}</span>
                  <span className="board-domain" style={{ fontSize: '13px', color: '#556', fontFamily: 'monospace' }}>{h.domain}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#778', lineHeight: '1.55', fontWeight: 300, marginTop: '10px', maxWidth: '640px' }}>
                  {h.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>

    </main>
  )
}
