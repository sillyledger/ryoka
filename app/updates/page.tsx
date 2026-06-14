'use client'

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

type Post = {
  id: string
  title: string
  slug: string
  category: string | null
  published_at: string
}

export default function Updates() {
  const [posts, setPosts] = useState<Post[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(8)

  useEffect(() => {
    fetch('/api/updates')
      .then(r => r.json())
      .then(data => {
        setPosts(data || [])
        setLoading(false)
      })
  }, [])

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))] as string[]
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const visible = filtered.slice(0, visibleCount)

  function formatDate(str: string) {
    return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 100px' }}>

        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Updates</p>
        <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', marginBottom: '48px', lineHeight: 1.1 }}>All posts</h1>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(8) }}
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                border: '1px solid',
                background: activeCategory === cat ? '#f0f0f0' : 'transparent',
                color: activeCategory === cat ? '#0D1821' : '#888',
                borderColor: activeCategory === cat ? '#f0f0f0' : '#2a3a4a',
                fontWeight: activeCategory === cat ? 500 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post list */}
        {loading ? (
          <p style={{ color: '#555', fontSize: '14px' }}>Loading…</p>
        ) : visible.length === 0 ? (
          <p style={{ color: '#555', fontSize: '14px' }}>No posts yet.</p>
        ) : (
          <div>
            {visible.map((post, i) => (
              <Link
                key={post.id}
                href={`/updates/${post.category?.toLowerCase() || 'general'}/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  borderBottom: '0.5px solid #1a2a3a',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <span style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', minWidth: '80px' }}>
                      {post.category || 'General'}
                    </span>
                    <span style={{ fontSize: '16px', color: '#d4d4d4', fontWeight: 300 }}>{post.title}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                    <span style={{ fontSize: '13px', color: '#555' }}>{formatDate(post.published_at)}</span>
                    <span style={{ color: '#3a5a7a', fontSize: '16px' }}>↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load more */}
        {filtered.length > visibleCount && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setVisibleCount(v => v + 8)}
              style={{ padding: '12px 28px', borderRadius: '999px', border: '1px solid #2a3a4a', background: 'transparent', color: '#888', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Load more ↓
            </button>
            <p style={{ fontSize: '12px', color: '#555', marginTop: '12px' }}>
              Showing {visibleCount} of {filtered.length} posts
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
