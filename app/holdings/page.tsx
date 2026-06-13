'use client'

import Navbar from '../components/Navbar'

export default function Holdings() {
  const holdings = [
    {
      name: 'TWO Docs',
      domain: 'two.so',
      description: 'The doc app built for iPad and Mac. Beautiful, focused writing for creatives, solo operators, and small teams.',
      tags: ['SaaS', 'B2B & B2C', 'In Beta'],
      href: 'https://www.two.so',
    },
    {
      name: 'Aegos Intel',
      domain: 'aegosintel.com',
      description: 'Company intelligence and data platform. Structured business insights for operators and analysts.',
      tags: ['SaaS', 'B2B', 'In Progress'],
      href: 'https://aegosintel.com',
    },
    {
      name: 'Sorano',
      domain: 'sorano.space',
      description: 'Roadmap, changelog, and community votes for your product. Share what you are building, let users vote on what is next, publish a changelog when you ship.',
      tags: ['SaaS', 'B2B', 'Startups', 'Live'],
      href: 'https://sorano.space',
    },
    {
      name: 'Tenkaro',
      domain: 'tenkaro.com',
      description: 'Domain monitoring tool. Track availability, expiry, and changes across the domains that matter to your business.',
      tags: ['SaaS', 'B2B', 'B2C', 'In Progress'],
      href: 'https://tenkaro.com',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#446', letterSpacing: '0.08em', marginBottom: '24px' }}>Holdings</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          Built to hold.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '620px' }}>
          Businesses, software, and digital assets we have built, acquired, or accumulated. Each chosen for its potential to create durable value through long-term ownership.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Holdings Grid */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 60px' }}>
        <p style={{ fontSize: '13px', color: '#446', letterSpacing: '0.08em', marginBottom: '40px' }}>Current Holdings</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
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
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#555', maxWidth: '480px', lineHeight: '1.5' }}>
          We are always evaluating new opportunities. Ownership is most powerful when measured in years and decades, not quarters.
        </p>
        <a href="mailto:acquire@ryoka.xyz" style={{ fontSize: '18px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Acquisition inquiries
        </a>
      </div>

    </main>
  )
}
