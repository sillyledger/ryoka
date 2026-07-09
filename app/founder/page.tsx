'use client'
import Navbar from '../components/Navbar'

export default function Founder() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://ryokagroup.com/founder#pieter',
        name: 'Pieter Borremans',
        jobTitle: 'Founder',
        description:
          'Writer, digital entrepreneur, and software founder. Born in Indonesia, raised in Belgium, based between Taipei and London.',
        birthPlace: 'Indonesia',
        alumniOf: 'KdG University College Antwerp',
        homeLocation: ['Taipei', 'London'],
        worksFor: { '@id': 'https://ryokagroup.com/#organization' },
        sameAs: [
          'https://pieterborremans.com',
          'https://ryokagroup.com/founder',
          'https://indiehacker.blog',
          'https://ryoka.xyz',
          'https://studybrew.co',
          'https://www.linkedin.com/in/pieter-borremans/',
          'https://medium.com/@borremanspieter',
          'https://www.youtube.com/@PieterBorremans',
          'https://github.com/sillyledger',
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://ryokagroup.com/#organization',
        name: 'Ryoka',
        founder: { '@id': 'https://ryokagroup.com/founder#pieter' },
      },
    ],
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @media (max-width: 768px) {
          .f-section { padding-left: 24px !important; padding-right: 24px !important; }
          .f-hero { padding-top: 80px !important; }
          .f-hero h1 { font-size: 48px !important; line-height: 1.05 !important; }
          .f-hero p { font-size: 19px !important; line-height: 30px !important; }
          .f-body { padding-top: 60px !important; }
          .f-body p { font-size: 19px !important; line-height: 30px !important; }
          .f-body .f-block { margin-bottom: 48px !important; }
          .f-cta { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      <div className="f-hero f-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <img
          src="/pieter-borremans-founder-ryoka.jpeg"
          alt="Pieter Borremans"
          style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', marginBottom: '32px', display: 'block' }}
        />
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Founder</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          Pieter Borremans
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
          Writer, digital entrepreneur, and software founder. Born in Indonesia, raised in Belgium, based between Taipei and London.
        </p>
      </div>

      <div className="f-body f-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <div className="f-block" style={{ marginBottom: '80px' }}>
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>On Ryoka</p>
          <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
            Pieter founded Ryoka, which builds, operates & invests in software products. He studied at KdG University College Antwerp before spending years living and working between Taipei and London.
          </p>
        </div>
        <div className="f-block">
          <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Elsewhere</p>
          <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4' }}>
            Alongside Ryoka, he writes about the psychological and emotional side of building on indiehacker.blog and pieterborremans.com.
          </p>
        </div>
      </div>

      <div className="f-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      <div className="f-cta f-section" style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#555', lineHeight: '1.5' }}>
          Full bio
        </p>
        <a href="https://ryokagroup.com/founder" style={{ fontSize: '18px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          ryokagroup.com/founder
        </a>
      </div>
    </main>
  )
}
