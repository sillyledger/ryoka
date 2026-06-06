export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <span style={{ fontSize: '40px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em' }}>ryoka</span>
        <a href="#" style={{ fontSize: '20px', color: '#666', textDecoration: 'none' }}>Contact</a>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          /ryo-ka/
        </h1>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          Ryoka builds internet companies, makes micro-acquisitions, and runs experiments across digital assets. We combine studio thinking with investor discipline. We pursue durable, compounding ownership above all else.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="#" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            About
          </a>
        </div>
      </div>

      {/* Second section */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          We are independent, founder-led, and early. Every asset we build or acquire is held with a long-term horizon in mind. This is not a sprint. We are laying the groundwork for something that compounds quietly over decades.
        </p>
      </div>
    </main>
  )
}
