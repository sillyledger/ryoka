'use client'
import React from 'react'
export default function Footer() {
  const year = new Date().getFullYear()
  const col1 = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Legal', href: '/legal' },
  ]
  const col2 = [
    { label: 'Holdings', href: '/holdings' },
    { label: 'Markets', href: '/markets' },
    { label: 'Capital', href: '/capital' },
  ]
  const col3 = [
    { label: 'Login', href: '/login' },
  ]
  const linkStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 300,
    color: '#d4d4d4',
    textDecoration: 'none',
    lineHeight: '1',
    transition: 'color 0.15s ease',
  }
  return (
    <footer style={{
      backgroundColor: '#0D1821',
      borderTop: '0.5px solid #1a2a3a',
      marginTop: '0',
      fontFamily: 'Geist, Helvetica, Arial, sans-serif',
    }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '60px 50px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
          <div style={{ flexShrink: 0 }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.02em' }}>
                <span style={{ color: '#E8C840' }}>/</span>ryoka<span style={{ color: '#E8C840' }}>/</span>
              </span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col1.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col2.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col3.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '0.5px solid #1a2a3a', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: '#446', fontWeight: 300, margin: 0 }}>
            &copy; {year} Ryoka. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#446', fontWeight: 300, margin: 0 }}>
            ryoka.xyz
          </p>
        </div>
      </div>
    </footer>
  )
}
function FooterLink({ href, label, style }: { href: string; label: string; style: React.CSSProperties }) {
  return (
    <a
      href={href}
      style={style}
      onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
      onMouseLeave={e => (e.currentTarget.style.color = '#d4d4d4')}
    >
      {label}
    </a>
  )
}
