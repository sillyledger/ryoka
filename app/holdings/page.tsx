'use client'

import Navbar from '../components/Navbar'

export default function Holdings() {
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
          .h-storybrew-inner { flex-direction: column !important; gap: 20px !important; }
          .h-storybrew-tags { justify-content: flex-start !important; align-self: auto !important; }
          .h-approach p { font-size: 19px !important; line-height: 30px !important; }
          .h-footer-strip { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="h-hero h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Holdings</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          Built to hold.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px' }}>
          Businesses, software, and digital assets we have built, acquired, or accumulated. Each chosen for its potential to create durable value through long-term ownership.
        </p>
      </div>

      {/* Divider */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Bento Grid */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Current Holdings</p>

        {/* Row 1: Sorano 2/3 + Aegos 1/3 */}
        <div className="h-row1" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <a
            href="https://sorano.space"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '36px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '21px', fontWeight: 700, color: '#f0f0f0' }}>Sorano</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '16px' }}>sorano.space</p>
            <p style={{ fontSize: '17px', color: '#aaa', lineHeight: '1.6', fontWeight: 300, marginBottom: '24px' }}>
              Roadmap, changelog, and community votes for your product. Share what you are building, let users vote on what is next, publish a changelog when you ship.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SaaS', 'B2B', 'Startups', 'Live'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </a>

          <a
            href="https://aegosintel.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0' }}>Aegos Intel</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>aegosintel.com</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300, marginBottom: '20px' }}>Company intelligence and data platform. Structured business insights for operators and analysts.</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SaaS', 'B2B', 'In Progress'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </a>
        </div>

        {/* Row 2: TWO + Tenkaro + One Peak Two */}
        <div className="h-row2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <a
            href="https://www.two.so"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0' }}>TWO Docs</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>two.so</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300, marginBottom: '20px' }}>The doc app built for iPad and Mac. Beautiful, focused writing for creatives and solo operators.</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SaaS', 'B2B & B2C', 'In Beta'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </a>

          <a
            href="https://tenkaro.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0' }}>Tenkaro</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>tenkaro.com</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300, marginBottom: '20px' }}>Domain monitoring tool. Track availability, expiry, and changes across the domains that matter.</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SaaS', 'B2B', 'B2C', 'In Progress'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </a>

          <a
            href="https://onepeaktwo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '19px', fontWeight: 700, color: '#f0f0f0' }}>One Peak Two</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>onepeaktwo.com</p>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.55', fontWeight: 300, marginBottom: '20px' }}>Studio and experiments arm. Building internet projects as an experiment - hit and miss principle.</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['Studio'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </a>
        </div>

        {/* Row 3: Story Brew full width */}
        <a
          href="https://storybrew.online"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', background: '#112233', borderRadius: '10px', padding: '36px', border: '0.5px solid #1a3050', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a4a6a')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3050')}
        >
          <div className="h-storybrew-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '560px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '21px', fontWeight: 700, color: '#f0f0f0' }}>Story Brew</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px' }}>storybrew.online</p>
              <p style={{ fontSize: '17px', color: '#aaa', lineHeight: '1.6', fontWeight: 300 }}>Bedtime stories for English learners (B1-B2), with a real narrator. A platform for language learning through immersive storytelling.</p>
            </div>
            <div className="h-storybrew-tags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
              {['Education', 'English Learning'].map(t => (
                <span key={t} style={{ fontSize: '11px', color: '#556', border: '0.5px solid #1a3050', borderRadius: '4px', padding: '3px 9px', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Our Approach */}
      <div className="h-approach h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 80px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          We favor assets with strong fundamentals, recurring economics, and opportunities for continued growth. Some are built internally from first principles. Others are acquired and stewarded for the long term.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          Unlike traditional investment firms, we are not focused on frequent exits or short-term optimization. We believe ownership is most powerful when measured in years and decades, not quarters.
        </p>
      </div>

      {/* Divider */}
      <div className="h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* Footer strip */}
      <div className="h-footer-strip h-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
