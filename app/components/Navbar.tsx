'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/holdings', label: 'Holdings' },
    { href: '/markets', label: 'Markets' },
    { href: '/capital', label: 'Capital' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]
  const externalLink = { href: 'https://www.sorano.space/ryoka', label: 'Ledger' }
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .ryoka-nav-links { display: none !important; }
          .ryoka-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .ryoka-mobile-menu { display: none !important; }
          .ryoka-hamburger { display: none !important; }
        }
      `}</style>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 50px 0',
        position: 'relative',
        zIndex: 100,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img src="/ryoka-mark.svg?v=2" alt="Ryoka" style={{ height: '60px' }} />
          <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.02em', color: '#f0f0f0', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
            Ryoka
          </span>
        </Link>
        {/* Desktop links */}
        <div className="ryoka-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>
              {label}
            </Link>
          ))}
          <a href={externalLink.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>
            {externalLink.label}
          </a>
        </div>
        {/* Hamburger */}
        <button
          className="ryoka-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '24px', height: '1.5px', background: '#aaa',
            transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            transition: 'transform 0.2s ease',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px', background: '#aaa',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px', background: '#aaa',
            transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            transition: 'transform 0.2s ease',
          }} />
        </button>
      </nav>
      {/* Mobile menu */}
      <div className="ryoka-mobile-menu" style={{
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '24px 50px 32px',
        gap: '28px',
        borderBottom: '0.5px solid #1a2a3a',
      }}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            style={{ fontSize: '22px', color: '#aaa', textDecoration: 'none', letterSpacing: '0.04em', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}
          >
            {label}
          </Link>
        ))}
        
          href={externalLink.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ fontSize: '22px', color: '#aaa', textDecoration: 'none', letterSpacing: '0.04em', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}
        >
          {externalLink.label}
        </a>
      </div>
    </>
  )
}
