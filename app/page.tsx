'use client'

import Navbar from './components/Navbar'

export default function Home() {
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
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          <span style={{ color: '#E8C840' }}>/</span>ryo-ka<span style={{ color: '#E8C840' }}>/</span>
        </h1>
        <p style={{ fontSize: '35px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          We&apos;re a permanent{' '}
          <a href="https://www.ryoka.xyz/capital" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '1px' }}>capital</a>
          {' '}company that builds, acquires, and invests in exceptional assets across private and public{' '}
          <a href="https://www.ryoka.xyz/markets" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '1px' }}>markets</a>
          . We pursue durable ownership, patient capital, and long-term value creation.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="/about" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            About
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          Most firms optimize for exits. We optimize for ownership. The longer we hold, the more we learn, and the better our next move becomes. We currently operate across a small number of owned properties. Software tools, content assets, and early-stage bets. Each is chosen for its potential to grow quietly and hold value over time.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          We look for undervalued digital properties, niche media brands, and small real-world businesses with durable fundamentals. We are not chasing growth. We are building a base of assets that quietly and consistently generate value.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Portfolio */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Portfolio &amp; Holdings</p>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '48px' }}>
          <a href="https://www.ryoka.xyz/holdings" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            View all holdings
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Reach Out */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Reach Out</p>
        <h2 style={{ fontSize: '52px', fontWeight: 900, color: '#f0f0f0', lineHeight: '1.05', letterSpacing: '-0.02em', marginBottom: '20px', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
          Let&apos;s talk<span style={{ color: '#E8C840' }}>.</span>
        </h2>
        <p style={{ fontSize: '18px', color: '#666', fontWeight: 300, lineHeight: '1.5', maxWidth: '520px', marginBottom: '60px' }}>
          Whether you&apos;re looking to partner, sell a business, or just follow what we&apos;re building — the door is open.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

          {/* Primary email — full width */}
          <div style={{
            gridColumn: 'span 2',
            background: '#242426',
            borderRadius: '10px',
            padding: '28px',
            border: '0.5px solid #2e2e30',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '10px' }}>General Enquiries</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '6px', height: '6px', background: '#E8C840', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#f0f0f0', fontWeight: 300, textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px' }}>
                  p@ryoka.xyz
                </a>
              </div>
            </div>
            <a href="mailto:p@ryoka.xyz" style={{ fontSize: '16px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Send a message
            </a>
          </div>

          {/* Acquisitions */}
          <div style={{ background: '#242426', borderRadius: '10px', padding: '28px', border: '0.5px solid #2e2e30' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Acquisitions</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300 }}>Selling a business or project?</p>
            <div style={{ marginTop: '20px' }}>
              <a
                href="mailto:acquire@ryoka.xyz?subject=Acquisition Inquiry"
                style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Get in touch
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Partnerships */}
          <div style={{ background: '#242426', borderRadius: '10px', padding: '28px', border: '0.5px solid #2e2e30' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Partnerships</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300 }}>Building something aligned?</p>
            <div style={{ marginTop: '20px' }}>
              <a
                href="mailto:partern@ryoka.xyz?subject=Partnership"
                style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Let&apos;s explore
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}
