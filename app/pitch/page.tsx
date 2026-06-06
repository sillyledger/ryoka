export default function Pitch() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <a href="/" style={{ fontSize: '35px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', textDecoration: 'none' }}>ryoka</a>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
      </nav>

      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 80px' }}>
        <a href="/" style={{ fontSize: '11px', color: '#555', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back</a>

        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '40px' }}>
          Pitch
        </h1>

        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', maxWidth: '680px', marginBottom: '16px' }}>
          We look at small internet businesses, niche digital properties, and micro-acquisitions with durable fundamentals. If you are building something quietly valuable, we want to hear from you.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '28px', fontWeight: 300, color: '#666', maxWidth: '580px' }}>
          We are not a fund. We are operators. We buy to hold, not to flip.
        </p>
      </div>

      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>

        <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', marginBottom: '0', paddingBottom: '24px', borderBottom: '0.5px solid #2a2a2a' }}>What we look for</p>

        {[
          { num: '01', title: 'Cash flow or a clear path to it', body: 'We only acquire what generates or can credibly generate returns. No speculative plays without a route to profitability.' },
          { num: '02', title: 'A defensible niche', body: 'The best assets serve a specific audience extremely well. We look for positions that are hard to replicate and easy to hold for a long time.' },
          { num: '03', title: 'A long holding horizon', body: 'We are not in the business of flipping. Every acquisition is made with the intention of holding for years, not months.' },
          { num: '04', title: 'Small and operated', body: 'We are most interested in businesses under $500k ARR that are owner-operated and looking for a good home, not an auction.' },
        ].map((item, i, arr) => (
          <div key={item.num} style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '0.5px solid #2a2a2a' }}>
            <span style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', padding: '28px 0', width: '60px', flexShrink: 0 }}>{item.num}</span>
            <span style={{ fontSize: '20px', fontWeight: 500, color: '#f0f0f0', padding: '28px 40px 28px 0', width: '260px', flexShrink: 0, lineHeight: '1.2' }}>{item.title}</span>
            <span style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', padding: '30px 0', flex: 1 }}>{item.body}</span>
          </div>
        ))}

        <div style={{ marginTop: '60px' }}>
          <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', marginBottom: '24px' }}>How to reach us</p>
          <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', maxWidth: '680px', marginBottom: '16px' }}>
            Send us a short note. No deck required.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '28px', fontWeight: 300, color: '#666', maxWidth: '580px' }}>
            Tell us what you built, how it makes money, and why you are considering a sale or partnership. We will respond within a week.
          </p>
        </div>

        <div style={{ borderTop: '0.5px solid #2a2a2a', marginTop: '60px', paddingTop: '60px', paddingBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555' }}>Ready to talk? Reach out directly.</p>
          <a href="mailto:acquire@ryoka.xyz" style={{ fontSize: '16px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>acquire@ryoka.xyz</a>
        </div>
      </div>
    </main>
  )
}
