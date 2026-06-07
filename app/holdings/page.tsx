import Navbar from '../components/Navbar'

export default function Holdings() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Holdings</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          The foundation of <span style={{ color: '#E8C840' }}>Ryoka.</span>
        </h1>
        <p style={{ fontSize: '35px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          Our holdings represent businesses, software, digital assets, and operating companies that we have built, acquired, or accumulated over time. While each asset is unique, they share a common characteristic: the potential to create durable value through long-term ownership.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="#holdings" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            Holdings
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          We favor assets with strong fundamentals, recurring economics, and opportunities for continued growth. Some are built internally from first principles. Others are acquired and stewarded for the long term. Together, they form a portfolio designed to compound value across market cycles.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          Unlike traditional investment firms, we are not focused on frequent exits or short-term optimization. We believe ownership is most powerful when measured in years and decades, not quarters.
        </p>
      </div>

      {/* Holdings Grid */}
      <div id="holdings" style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Current Holdings</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#2a2a2a' }}>

          {/* Card */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px' }}>
            <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Operating Company</p>
            <p style={{ fontSize: '22px', fontWeight: 900, color: '#f0f0f0', marginBottom: '10px' }}>Ryoka Studio</p>
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: '1.7' }}>Internal studio and product development arm. Builds software and digital assets from first principles.</p>
            <span style={{ display: 'inline-block', marginTop: '20px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 9px', border: '0.5px solid #3a3a2e', color: '#E8C840' }}>Active</span>
          </div>

          {/* Card */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px' }}>
            <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Software</p>
            <p style={{ fontSize: '22px', fontWeight: 900, color: '#f0f0f0', marginBottom: '10px' }}>Asset TBD</p>
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: '1.7' }}>Next software acquisition or internally developed product under evaluation.</p>
            <span style={{ display: 'inline-block', marginTop: '20px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 9px', border: '0.5px solid #2a3030', color: '#5a9a7a' }}>Building</span>
          </div>

          {/* Empty */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '12px', color: '#2a2a2a', letterSpacing: '0.1em' }}>Position open</p>
          </div>

          {/* Card */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px' }}>
            <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Digital Asset</p>
            <p style={{ fontSize: '22px', fontWeight: 900, color: '#f0f0f0', marginBottom: '10px' }}>Asset TBD</p>
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: '1.7' }}>Evaluating digital asset opportunities with recurring economics and durable ownership potential.</p>
            <span style={{ display: 'inline-block', marginTop: '20px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 9px', border: '0.5px solid #2a2535', color: '#7a70c0' }}>Evaluating</span>
          </div>

          {/* Empty */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '12px', color: '#2a2a2a', letterSpacing: '0.1em' }}>Position open</p>
          </div>

          {/* Empty */}
          <div style={{ backgroundColor: '#1c1c1e', padding: '32px 28px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '12px', color: '#2a2a2a', letterSpacing: '0.1em' }}>Position open</p>
          </div>

        </div>

        {/* Footer strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '60px' }}>
          <p style={{ fontSize: '14px', fontWeight: 300, color: '#444', maxWidth: '520px', lineHeight: '1.8' }}>
            We are always evaluating new opportunities. Ownership is most powerful when measured in years and decades, not quarters.
          </p>
          <a href="mailto:acquire@ryoka.xyz" style={{ fontSize: '14px', color: '#E8C840', textDecoration: 'none', borderBottom: '0.5px solid #E8C840', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
            Acquisition inquiries
          </a>
        </div>
      </div>

    </main>
  )
}
