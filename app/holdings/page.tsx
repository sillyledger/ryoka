'use client'

import Navbar from '../components/Navbar'

export default function Holdings() {
  const card = {
    display: 'block',
    background: '#112233',
    borderRadius: '10px',
    padding: '28px',
    border: '0.5px solid #1a3050',
    textDecoration: 'none',
    transition: 'border-color 0.15s ease',
  } as const

  const tag = {
    fontSize: '11px',
    color: '#556',
    border: '0.5px solid #1a3050',
    borderRadius: '4px',
    padding: '3px 9px',
    letterSpacing: '0.05em',
  } as const

  const holdings = [
    { name: 'Sorano', domain: 'sorano.space', description: 'Roadmap, changelog, and community votes for your product. Share what you are building, let users vote on what is next, publish a changelog when you ship.', tags: ['SaaS', 'B2B', 'Startups', 'Live'], href: 'https://sorano.space', row: 1 },
    { name: 'Aegos Intel', domain: 'aegosintel.com', description: 'Company intelligence and data platform. Structured business insights for operators and analysts.', tags: ['SaaS', 'B2B', 'In Progress'], href: 'https://aegosintel.com', row: 1 },
    { name: 'TWO Docs', domain: 'two.so', description: 'The doc app built for iPad and Mac. Beautiful, focused writing for creatives and solo operators.', tags: ['SaaS', 'B2B & B2C', 'In Beta'], href: 'https://www.two.so', row: 2 },
    { name: 'Kiroka', domain: 'kiroka.xyz', description: 'A curated directory of tools and products for indie builders and operators.', tags: ['Directory', 'Live'], href: 'https://app.kiroka.xyz', row: 2 },
    { name: 'Study Brew', domain: 'studybrew.co', description: 'An English learning platform for B1\u2013B2 learners, built around short audio stories with real characters and everyday situations.', tags: ['SaaS', 'B2C', 'In Progress'], href: 'https://studybrew.co', row: 2 },
    { name: 'KiraPulse', domain: 'kirapulse.com', description: 'Domain monitoring tool. Track availability, expiry, and changes across the domains that matter.', tags: ['SaaS', 'B2B', 'In Progress'], href: 'https://kirapulse.com', row: 3 },
    { name: 'Liyo', domain: 'liyo.co', description: 'Studio and experiments arm. Building small internet projects on a hit-and-miss principle.', tags: ['Studio'], href: 'https://liyo.co', row: 3 },
    { name: 'Strevius', domain: 'strevius.com', description: 'Studio and media group building services and brands across the web.', tags: ['Studio', 'Media'], href: 'https://strevius.com', row: 3 },
  ]

  const Card = ({ h }: { h: (typeof holdings)[number] }) => (
    <a
      href={h.href}
      target="_blank"
      rel="noopener noreferrer"
      style={card}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0' }}>{h.name}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>{h.domain}</p>
      <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300, marginBottom: '20px' }}>{h.description}</p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {h.tags.map(t => (
          <span key={t} style={tag}>{t}</span>
        ))}
      </div>
    </a>
  )

  const row1 = holdings.filter(h => h.row === 1)
  const row2 = holdings.filter(h => h.row === 2)
  const row3 = holdings.filter(h => h.row === 3)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .h-section { padding-left: 24px !important; padding-right: 24px !important; }
          .h-hero { padding-top: 80px !important; }
          .h-hero h1 { font-size: 48px !important; }
          .h-hero p { font-size: 19px !important; line-height: 30px !important; }
          .h-row1 { grid-template-columns: 1fr !important; }
          .h-row2 { grid-template-columns: 1fr !important; }
          .h-row3 { grid-template-columns: 1fr !important; }
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

      {/* Bento Grid */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 100px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Current Holdings</p>

        {/* Row 1: Sorano 2/3 + Aegos 1/3 */}
        <div className="h-row1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
          {row1.map(h => <Card key={h.name} h={h} />)}
        </div>

        {/* Row 2: three across */}
        <div className="h-row2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
          {row2.map(h => <Card key={h.name} h={h} />)}
        </div>

        {/* Row 3: three across */}
        <div className="h-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          {row3.map(h => <Card key={h.name} h={h} />)}
        </div>
      </div>

    </main>
  )
}