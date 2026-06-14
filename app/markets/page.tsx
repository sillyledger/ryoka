'use client'

import Navbar from '../components/Navbar'

export default function Markets() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .m-section { padding-left: 24px !important; padding-right: 24px !important; }
          .m-hero { padding-top: 80px !important; }
          .m-hero h1 { font-size: 48px !important; }
          .m-hero p { font-size: 19px !important; line-height: 30px !important; }
          .m-row1 { grid-template-columns: 1fr !important; }
          .m-row2 { grid-template-columns: 1fr !important; }
          .m-approach p { font-size: 19px !important; line-height: 30px !important; }
          .m-cta { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="m-hero m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Markets</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          We trade our own book.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
          Ryoka actively manages its own capital across global markets. Primarily proprietary. Selectively open to aligned partners.
        </p>
      </div>

      {/* Allocation bento */}
      <div className="m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Allocation</p>

        {/* Row 1: Equities 2/3 + Futures 1/3 */}
        <div className="m-row1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <div style={{ background: '#112233', borderRadius: '10px', border: '0.5px solid #1a3050', padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Equities</p>
            <p style={{ fontSize: '52px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: '1', marginBottom: '12px' }}>60%</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>Global equities, long positions, concentrated bets on businesses we understand.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#1a3050' }}>
              <div style={{ width: '60%', height: '100%', background: '#2a5a8a' }} />
            </div>
          </div>
          <div style={{ background: '#112233', borderRadius: '10px', border: '0.5px solid #1a3050', padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Futures</p>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: '1', marginBottom: '12px' }}>15%</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>Index and commodity futures for tactical exposure.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#1a3050' }}>
              <div style={{ width: '15%', height: '100%', background: '#2a5a8a' }} />
            </div>
          </div>
        </div>

        {/* Row 2: Crypto + Commodities + Forex */}
        <div className="m-row2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <div style={{ background: '#112233', borderRadius: '10px', border: '0.5px solid #1a3050', padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Crypto</p>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: '1', marginBottom: '12px' }}>10%</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>Selective digital asset exposure.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#1a3050' }}>
              <div style={{ width: '10%', height: '100%', background: '#2a5a8a' }} />
            </div>
          </div>
          <div style={{ background: '#112233', borderRadius: '10px', border: '0.5px solid #1a3050', padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Commodities</p>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: '1', marginBottom: '12px' }}>10%</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>Hard assets, inflation hedge.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#1a3050' }}>
              <div style={{ width: '10%', height: '100%', background: '#2a5a8a' }} />
            </div>
          </div>
          <div style={{ background: '#112233', borderRadius: '10px', border: '0.5px solid #1a3050', padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Forex</p>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: '1', marginBottom: '12px' }}>5%</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300 }}>Currency pairs, opportunistic.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#1a3050' }}>
              <div style={{ width: '5%', height: '100%', background: '#2a5a8a' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Our Approach */}
      <div className="m-approach m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our approach</p>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          We run proprietary strategies with internal capital. Every position is taken with a clear thesis and closed when that thesis no longer holds. We do not chase performance, react to noise, or optimise for appearance.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
          Market activity exists to serve the broader Ryoka ecosystem. Returns fund acquisitions, new ventures, and existing holdings. The book and the business reinforce each other.
        </p>
      </div>

      {/* Divider */}
      <div className="m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Outside Capital */}
      <div className="m-approach m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Outside capital</p>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
          This is not a fund raise. It is a selective, relationship-driven arrangement for those who understand what Ryoka is building. A small allocation, up to 10% of the book, may be opened to aligned partners on a case-by-case basis.
        </p>
      </div>

      {/* Divider */}
      <div className="m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* CTA */}
      <div className="m-cta m-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#555', maxWidth: '480px', lineHeight: '1.5' }}>
          Interested in co-investing or learning more about how we operate in markets?
        </p>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '18px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Partner inquiries
        </a>
      </div>

    </main>
  )
}
