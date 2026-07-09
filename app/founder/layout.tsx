import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pieter Borremans | Founder of Ryoka',
  description: 'Writer, digital entrepreneur, and software founder. Born in Indonesia, raised in Belgium, based between Taipei and London.',
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
