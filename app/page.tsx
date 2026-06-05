export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '28px 185px', fontSize: '13px', color: '#666' }}>
        <span>Welcome</span>
        <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
      </nav>

      {/* Hero */}
      <div style={{ padding: '60px 185px 120px', maxWidth: '1400px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '40px' }}>
          /ryo-ka/
        </h1>
        <p style={{ fontSize: '32px', lineHeight: '44px', fontWeight: 400, color: '#d4d4d4', maxWidth: '800px', marginBottom: '44px' }}>
          Ryoka is a brand and design consultancy working from offices in London and Mallorca. We deliver creative thinking and world-class design across a wide range of disciplines for clients far and wide, big and small.
        </p>
        <p style={{ fontSize: '32px', lineHeight: '44px', fontWeight: 400, color: '#d4d4d4', maxWidth: '640px' }}>
          We believe in the transformative power of ideas to generate business success.
        </p>
      </div>
    </main>
  )
}
