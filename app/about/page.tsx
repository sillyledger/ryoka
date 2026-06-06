export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <a href="/" style={{ fontSize: '36px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', textDecoration: 'none' }}>ryoka</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <a href="/studio" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Studio</a>
          <a href="/pitch" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Pitch</a>
          <a href="/about" style={{ fontSize: '20px', color: '#f0f0f0', textDecoration: 'none', letterSpacing: '0.06em' }}>About</a>
          <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
        </div>
      </nav>

      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 120px' }}>
        <a href="/" style={{ fontSize: '11px', color: '#555', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back</a>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>About</h1>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', maxWidth: '780px', marginBottom: '40px' }}>
          Ryoka is a small, independent group founded in 2025. We build internet companies, make micro-acquisitions, and run experiments across digital assets.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#888', maxWidth: '680px', marginBottom: '120px' }}>
          We are founder-led, independently held, and operating quietly for the long term. No outside mandates, no quarterly pressure. Just patient capital and deliberate ownership.
        </p>
        <div style={{ borderTop: '0.5px solid #2a2a2a', paddingTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555' }}>Want to talk? Acquisitions, partnerships, or ideas.</p>
          <a href="mailto:p@ryoka.xyz" style={{ fontSize: '16px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
        </div>
      </div>
    </main>
  )
}
