'use client'

import Navbar from '../components/Navbar'

export default function Markets() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Markets</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'flex-end', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '82px', fontWeight: 900, lineHeight: '0.95', letterSpacing: '-0.03em', color: '#f0f0f0', margin: 0 }}>
            We trade<br />our own<br />book<span style={{ color: '#E8C840' }}>.</span>
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '28px', fontWeight: 300, color: '#888', margin: 0, paddingBottom: '8px' }}>
            Ryoka actively manages its own capital across global markets — equities, futures, forex, crypto, and commodities. Primarily proprietary. Selectively open to aligned partners.
          </p>
        </div>
      </div>

      {/* Asset class strip */}
      <div style={{ borderTop: '0.5px solid #2a2a2c', borderBottom: '0.5px solid #2a2a2c', padding: '14px 50px', display: 'flex', gap: '48px', overflow: 'hidden' }}>
        {['Equities', '—', 'Futures', '—', 'Forex', '—', 'Crypto', '—', 'Commodities', '—', 'Long / Short', '—', 'Proprietary'].map((item, i) => (
          <span key={i} style={{ fontSize: '11px', color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{item}</span>
        ))}
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '60px' }}>
          <div style={{ paddingTop: '6px' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', margin: 0 }}>Our approach</p>
          </div>
          <div>
            <p style={{ fontSize: '32px', fontWeight: 300, color: '#d4d4d4', lineHeight: '1.4', margin: '0 0 40px' }}>
              No external mandates. No fund structure. No performance theatre.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 300, color: '#888', lineHeight: '1.7', margin: '0 0 24px' }}>
              We run proprietary strategies with internal capital. Every position is taken with a clear thesis — and closed when that thesis no longer holds. We do not chase performance, react to noise, or optimise for appearance.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 300, color: '#888', lineHeight: '1.7', margin: 0 }}>
              Market activity exists to serve the broader Ryoka ecosystem. Returns fund acquisitions, new ventures, and existing holdings. The book and the business reinforce each other.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Outside Capital */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '60px', alignItems: 'start' }}>
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', margin: 0, paddingTop: '6px' }}>Outside capital</p>
          <div>
            <p style={{ fontSize: '26px', fontWeight: 300, color: '#d4d4d4', lineHeight: '1.5', margin: '0 0 28px', maxWidth: '580px' }}>
              A small allocation — up to 10% — is reserved for aligned external partners. This is not a fund raise. It is a selective, relationship-driven arrangement for those who understand what Ryoka is building.
            </p>
            <a
              href="mailto:p@ryoka.xyz"
              style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Closing */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '48px', fontWeight: 900, color: '#2a2a2c', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px', userSelect: 'none' }}>"</p>
        <p style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', lineHeight: '1.2', letterSpacing: '-0.02em', maxWidth: '700px', margin: 0 }}>
          Markets and operations are two sides of the same balance sheet<span style={{ color: '#E8C840' }}>.</span>
        </p>
      </div>

    </main>
  )
}
