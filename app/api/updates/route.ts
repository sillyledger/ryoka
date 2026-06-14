import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, category, published_at')
    .eq('target_site', 'ryoka.xyz')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    return NextResponse.json([], { status: 500 })
  }

  return NextResponse.json(data)
}
