export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <span style={{ fontSize: '40px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em' }}>r.</span>
        <a href="#" style={{ fontSize: '20px', color: '#666', textDecoration: 'none' }}>Contact</a>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          /ryo-ka/
        </h1>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          We build tiny internet companies, makes micro-acquisitions, and runs experiments across digital assets. We combine studio thinking with investor discipline. We pursue durable, compounding ownership above all else.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="#" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            About
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          Most firms optimize for exits. We optimize for ownership. The longer we hold, the more we learn, and the better our next move becomes. We currently operate across a small number of owned properties. Software tools, content assets, and early-stage bets. Each is chosen for its potential to grow quietly and hold value over time.
        </p>
      </div>

      {/* Portfolio */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Portfolio</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#2a2a2a' }}>
          {[
            { num: '01', name: 'Two Docs', desc: 'A writing and document tool built for focused work. Clean, minimal, distraction-free.', type: 'Software — owned' },
            { num: '02', name: 'Aegos Intel', desc: 'Company intelligence and data platform for professionals who need clarity, fast.', type: 'SaaS — owned' },
            { num: '03', name: 'Story Brew', desc: 'Narrative content brand. Built for audiences that want depth over noise.', type: 'Media — owned' },
            { num: '04', name: 'One Peak Two', desc: 'Studio and experiments branch. Where we build, test, and launch new digital assets.', type: 'Studio — owned' },
          ].map((item) => (
            <div key={item.num} style={{ backgroundColor: '#1c1c1e', padding: '40px', display: 'grid', gridTemplateRows: '20px 48px 1fr 24px', gap: '16px' }}>
              <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', margin: 0 }}>{item.num}</p>
              <p style={{ fontSize: '28px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, alignSelf: 'center' }}>{item.name}</p>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.08em', margin: 0, alignSelf: 'end' }}>{item.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Thesis */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Investment Thesis</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '32px', maxWidth: '680px' }}>
          We look for undervalued digital properties, niche media brands, and small real-world businesses with durable fundamentals. We are not chasing growth. We are building a base of assets that quietly and consistently generate value.
        </p>
        <a href="#" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '70px' }}>
          Read Thesis
        </a>

        {[
          { num: '01', title: 'Cash flow or a clear path to it', body: 'We only acquire what generates or can credibly generate returns. No speculative plays without a route to profitability.' },
          { num: '02', title: 'A defensible niche', body: 'The best assets serve a specific audience extremely well. We look for positions that are hard to replicate and easy to hold.' },
          { num: '03', title: 'A long holding horizon', body: 'We are not in the business of flipping. Every acquisition is made with the intention of holding for years, not months. Patience is the edge.' },
        ].map((item, i, arr) => (
          <div key={item.num} style={{ display: 'flex', alignItems: 'flex-start', borderTop: '0.5px solid #2a2a2a', borderBottom: i === arr.length - 1 ? '0.5px solid #2a2a2a' : 'none' }}>
            <span style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', padding: '32px 0', width: '60px', flexShrink: 0 }}>{item.num}</span>
            <span style={{ fontSize: '22px', fontWeight: 500, color: '#f0f0f0', padding: '32px 40px 32px 0', width: '280px', flexShrink: 0, lineHeight: '1.2' }}>{item.title}</span>
            <span style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', padding: '34px 0', flex: 1 }}>{item.body}</span>
          </div>
        ))}

        <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p style={{ fontSize: '40px', lineHeight: '48px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', margin: 0 }}>We hold.<br />We do not flip.</p>
          <p style={{ fontSize: '13px', color: '#444', letterSpacing: '0.08em', margin: 0 }}>Ryoka — est. 2025</p>
        </div>
      </div>
    </main>
  )
}
