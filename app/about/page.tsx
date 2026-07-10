'use client'
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .a-section { padding-left: 24px !important; padding-right: 24px !important; }
          .a-hero { padding-top: 80px !important; }
          .a-hero h1 { font-size: 48px !important; line-height: 1.05 !important; }
          .a-hero p { font-size: 19px !important; line-height: 30px !important; }
          .a-body { padding-top: 60px !important; }
          .a-body p { font-size: 19px !important; line-height: 30px !important; }
          .a-body .a-block { margin-bottom: 48px !important; }
          .a-cta { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      <div className="a-hero a-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>About</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          Small group.<br />Long game.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
          Ryoka is a small, independent group founded in 2025. We build and operate digital products, and run experiments across the web. We are based in London and Taipei.
        </p>
      </div>

      <div className="a-body a-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <div className="a-block" style={{ marginBottom: '80px' }}>
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>How we operate</p>
          <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
            We are founder-led and independently held, building quietly for the long term. No outside mandates, no quarterly pressure &mdash; just focused work on products we own and run ourselves. Everything is funded by revenue from the portfolio itself.
          </p>
        </div>
        <div className="a-block">
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>On experiments</p>
          <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
            Not every idea is serious. Some are stupid on purpose. We believe the weird ones, the niche ones, the ones that probably will not work, are how you find the things that do. We run them anyway, cheaply and fast, and keep what compounds.
          </p>
        </div>
      </div>

      <div className="a-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      <div className="a-cta a-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#555', lineHeight: '1.5' }}>
          Interested in a chat?
        </p>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '18px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Get in touch
        </a>
      </div>
    </main>
  )
}