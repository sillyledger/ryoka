'use client'

import Navbar from '../components/Navbar'

export default function Holdings() {
  const holdings = [
    {
      name: 'Aegos Intel',
      domain: 'aegosintel.com',
      description: 'Company intelligence and data platform. Structured business insights for operators and analysts.',
      tags: ['SaaS', 'B2B', 'In Progress'],
      initial: 'A',
      iconBg: '#E8C840',
      iconColor: '#1c1c1e',
      href: 'https://aegosintel.com',
    },
    {
      name: 'Two',
      domain: 'two.so',
      description: 'The doc app built for iPad and Mac. Beautiful, focused writing for creatives, solo operators, and small teams.',
      tags: ['SaaS', 'B2B & B2C', 'In Beta'],
      initial: '2',
      iconBg: '#1c1c2e',
      iconColor: '#8888ff',
      href: 'https://www.two.so',
    },
    {
      name: 'One Peak Two',
      domain: 'onepeaktwo.com',
      description: 'Studio and experiments arm. Building internet projects as an experiment — hit and miss principle.',
      tags: ['Studio'],
      initial: 'O',
      iconBg: '#2a2a2c',
      iconColor: '#aaa',
      href: 'https://onepeaktwo.com',
    },
    {
      name: 'Story Brew',
      domain: 'storybrew.online',
      description: 'Bedtime stories for English learners (B1–B2), with a real narrator. A platform for language learning through immersive storytelling.',
      tags: ['Education', 'English Learning'],
      initial: 'S',
      iconBg: '#1a3a5c',
      iconColor: '#7aaee8',
      href: 'https://storybrew.online',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Holdings</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          The foundation of <span style={{ color: '#E8C840' }}>Ryoka.</span>
        </h1>
        <p style={{ fontSize: '35px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          Businesses, software, and digital assets we have built, acquired, or accumulated. Each chosen for its potential to create durable value through long-term ownership.
        </p>
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          We favor assets with strong fundamentals, recurring economics, and opportunities for continued growth. Some are built internally from first principles. Others are acquired and stewarded for the long term.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          Unlike traditional investment firms, we are not focused on frequent exits or short-term optimization. We believe ownership is most powerful when measured in years and decades, not quarters.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Holdings Grid */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Current Holdings</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {holdings.map((h) => (
            <a
              key={h.name}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#242426',
                borderRadius: '10px',
                padding: '28px',
                border: '0.5px solid #2e2e30',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#444')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e2e30')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
                    {h.name}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: h.iconBg,
                  color: h.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px',
                  flexShrink: 0,
                  fontFamily: 'Geist, Helvetica, Arial, sans-serif',
                }}>
                  {h.initial}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>{h.domain}</p>
              <p style={{ fontSize: '16px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>{h.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '20px' }}>
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      color: '#555',
                      border: '0.5px solid #333',
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

        {/* Footer strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '60px' }}>
          <p style={{ fontSize: '18px', fontWeight: 300, color: '#666', maxWidth: '520px', lineHeight: '1.5' }}>
            We are always evaluating new opportunities. Ownership is most powerful when measured in years and decades, not quarters.
          </p>
          <a href="mailto:acquire@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Acquisition inquiries
          </a>
        </div>
      </div>

    </main>
  )
}
