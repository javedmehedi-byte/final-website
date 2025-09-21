import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IHRC Paramedical College',
  description: 'Healthcare training and certification programs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  )
}
