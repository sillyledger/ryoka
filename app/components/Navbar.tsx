import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
        <img src="/ryoka-mark.svg?v=2" alt="Ryoka" style={{ height: '60px' }} />
        <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.02em', color: '#f0f0f0', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
          Ryoka
        </span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link href="/holdings" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Holdings</Link>
        <Link href="/markets" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Markets</Link>
        <Link href="/capital" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Capital</Link>
        <Link href="/about" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>About</Link>
        <Link href="/contact" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Contact</Link>
      </div>
    </nav>
  )
}
