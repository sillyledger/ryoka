export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <span style={{ fontSize: '40px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em' }}>ryoka</span>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          <span style={{ color: '#E8C840' }}>/</span>ryo-ka<span style={{ color: '#E8C840' }}>/</span>
        </h1>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          We build internet companies, make micro-acquisitions, and run experiments across digital assets. We combine studio thinking with investor discipline. We pursue durable, compounding ownership above all else.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="#" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}>
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
    </main>
  )
}
