'use client'

import Navbar from './components/Navbar'

const STATUS_STYLES = {
  live: { label: 'Live', color: '#5ac8a8' },
  building: { label: 'Building', color: '#e0a458' },
  parked: { label: 'Parked', color: '#666' },
}

export default function Home() {
  const board = [
    {
      name: 'TWO Docs',
      domain: 'two.so',
      stage: 'Shipping',
      status: 'live',
      href: 'https://www.two.so',
      updatedAt: '2026-07-14',
    },
    {
      name: 'Sorano',
      domain: 'sorano.space',
      stage: 'Shipping',
      status: 'live',
      href: 'https://sorano.space',
      updatedAt: '2026-06-20',
    },
    {
      name: 'Kiroka',
      domain: 'kiroka.xyz',
      stage: 'Daily drip',
      status: 'building',
      href: 'https://app.kiroka.xyz',
      updatedAt: '2026-07-15',
    },
    {
      name: 'Strevius',
      domain: 'strevius.com',
      stage: 'Dashboard',
      status: 'building',
      href: 'https://strevius.com',
      updatedAt: '2026-07-01',
    },
    {
      name: 'KiraPulse',
      domain: 'kirapulse.com',
      stage: 'In progress',
      status: 'building',
      href: 'https://kirapulse.com',
      updatedAt: '2026-06-10',
    },
    {
      name: 'Liyo',
      domain: 'liyo.co',
      stage: 'Experiments',
      status: 'parked',
      href: 'https://liyo.co',
      updatedAt: '2026-04-02',
    },
  ]

  const isRecent = (dateStr) => {
    const updated = new Date(dateStr).getTime()
    const hoursSince = (Date.now() - updated) / (1000 * 60 * 60)
    return hoursSince >= 0 && hoursSince <= 48
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .home-hero { padding: 120px 24px 0 !important; }
          .home-hero p { font-size: 24px !important; line-height: 36px !important; }
          .home-hero-cta { margin-top: 48px !important; }
          .home-section { padding-left: 24px !important; padding-right: 24px !important; }
          .board-row { grid-template-columns: 1.4fr 1fr !important; row-gap: 6px !important; }
          .board-stage { display: none !important; }
          .board-domain { grid-column: 1 / -1 !important; }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="home-hero home-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '250px 50px 0' }}>
        <p style={{ fontSize: '35px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          We build and operate a portfolio of digital{' '}
          <a href="/holdings" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '1px' }}>products</a>
          {' '}&mdash; software and tools crafted for creatives, operators, and small{' '}
          <a href="/holdings" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '1px' }}>teams</a>
          . Made with care, built to last.
        </p>
        <div className="home-hero-cta" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="/about" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            About
          </a>
        </div>
      </div>

      {/* Board */}
      <div className="home-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em' }}>Live board</p>
          <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em' }}>{board.length} brands tracked</p>
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

          {board.map((b, i) => {
            const s = STATUS_STYLES[b.status]
            const recent = isRecent(b.updatedAt)
            return (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="board-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
                  alignItems: 'center',
                  padding: '18px 24px',
                  textDecoration: 'none',
                  borderBottom: i === board.length - 1 ? 'none' : '0.5px solid #16263a',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1d2c')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 700, color: '#f0f0f0' }}>
                  {b.name}
                  {recent && (
                    <span
                      title={`Updated ${b.updatedAt}`}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#5ac8a8',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: s.color, letterSpacing: '0.03em' }}>
                  {s.label}
                </span>
                <span className="board-stage" style={{ fontSize: '13px', color: '#889' }}>{b.stage}</span>
                <span className="board-domain" style={{ fontSize: '13px', color: '#556', fontFamily: 'monospace' }}>{b.domain}</span>
              </a>
            )
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '48px' }}>
          <a href="/holdings" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            View all holdings
          </a>
        </div>
      </div>

    </main>
  )
}
