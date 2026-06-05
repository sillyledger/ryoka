import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ryoka',
  description: 'Hybrid investment firm, studio, and operator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
