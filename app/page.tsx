'use client'

import Navbar from './components/Navbar'

export default function Home() {
  const holdings = [
    {
      name: 'TWO Docs',
      domain: 'two.so',
      description: 'The doc app built for iPad and Mac. Beautiful, focused writing for creatives, solo operators, and small teams.',
      tags: ['SaaS', 'B2B & B2C', 'In Beta'],
      href: 'https://www.two.so',
    },
    {
      name: 'Sorano',
      domain: 'sorano.space',
      description: 'Roadmap, changelog, and community votes for your product. Share what you are building, let users vote on what is next, publish a changelog when you ship.',
      tags: ['SaaS', 'B2B', 'Startups', 'Live'],
      href: 'https://sorano.space',
    },
    {
      name: 'Kiroka',
      domain: 'kiroka.xyz',
      description: 'A curated directory of tools and products for indie builders and operators.',
      tags: ['Directory', 'Live'],
      href: 'https://app.kiroka.xyz',
    },
    {
      name: 'Strevius',
      domain: 'strevius.com',
      description: 'Studio and media group building services and brands across the web.',
      tags: ['Studio', 'Media'],
      href: 'https://strevius.com',
    },
    {
      name: 'KiraPulse',
      domain: 'kirapulse.com',
      description: 'Domain monitoring tool. Track availability, expiry, and changes across the domains that matter.',
      tags: ['SaaS', 'B2B', 'In Progress'],
      href: 'https://kirapulse.com',
    },
    {
      name: 'Liyo',
      domain: 'liyo.co',
      description: 'Studio and experiments arm. Building small internet projects on a hit-and-miss principle.',
      tags: ['Studio'],
      href: 'https://liyo.co',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .home-hero { padding: 120px 24px 0 !important; }
          .home-hero p { font-size: 24px !important; line-height: 36px !important; }
          .home-hero-cta { margin-top: 48px !important; }
          .home-section { padding-left: 24px !important; padding-right: 24px !important; }
          .home-portfolio-grid { grid-template-columns: 1fr !important; }
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

      {/* Portfolio */}
      <div className="home-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Portfolio</p>
        <div className="home-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {holdings.map((h) => (
            <a
              key={h.name}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#112233',
                borderRadius: '10px',
                padding: '28px',
                border: '0.5px solid #1a3050',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
                  {h.name}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: '13px', color: '#446', marginBottom: '14px' }}>{h.domain}</p>
              <p style={{ fontSize: '16px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>{h.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '20px' }}>
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      color: '#556',
                      border: '0.5px solid #1a3050',
                      borderRadius: '4px',
                      padding: '3px 9px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
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