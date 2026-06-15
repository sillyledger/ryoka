export const revalidate = 0

import { createClient } from '@supabase/supabase-js'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function PostPage({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('target_site', 'ryoka.xyz')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px' }}>
          <p style={{ color: '#555', fontSize: '14px' }}>Post not found.</p>
          <Link href="/updates" style={{ color: '#3a5a7a', fontSize: '14px', marginTop: '16px', display: 'inline-block' }}>← Back to updates</Link>
        </div>
      </main>
    )
  }

  function formatDate(str: string) {
    return new Date(str).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 50px 100px' }}>

        {/* Back */}
        <Link
          href="/updates"
          style={{ fontSize: '13px', color: '#555', textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '48px' }}
        >
          ← Updates
        </Link>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {post.category || 'General'}
          </span>
          <span style={{ color: '#2a3a4a' }}>·</span>
          <span style={{ fontSize: '13px', color: '#555' }}>{formatDate(post.published_at)}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '48px' }}>
          {post.title}
        </h1>

        {/* Content */}
        <div
          className="ryoka-post-content"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
          style={{ color: '#d4d4d4', fontSize: '17px', lineHeight: '1.85', fontWeight: 300 }}
        />

        <style>{`
          .ryoka-post-content p { margin-bottom: 20px; }
          .ryoka-post-content h2 { font-size: 24px; font-weight: 900; color: #f0f0f0; margin: 40px 0 16px; letter-spacing: -0.02em; }
          .ryoka-post-content h3 { font-size: 19px; font-weight: 600; color: #f0f0f0; margin: 32px 0 12px; }
          .ryoka-post-content ul, .ryoka-post-content ol { padding-left: 20px; margin-bottom: 20px; }
          .ryoka-post-content li { margin-bottom: 8px; }
          .ryoka-post-content strong { color: #f0f0f0; font-weight: 600; }
          .ryoka-post-content a { color: #d4d4d4; text-decoration: underline; text-decoration-color: rgba(255,255,255,0.3); text-underline-offset: 3px; }
          .ryoka-post-content blockquote { border-left: 2px solid #2a3a4a; padding-left: 20px; margin: 24px 0; color: #888; }
          .ryoka-post-content code { background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-size: 14px; }
          .ryoka-post-content pre { background: #111; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 24px 0; }
        `}</style>

      </div>
    </main>
  )
}
