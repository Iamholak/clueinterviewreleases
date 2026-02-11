import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClueInterview - AI Interview Assistant for Developers',
  description: 'Practice interviews with AI feedback, interview transcriptions, and tailored coaching based on your resume. Perfect for tech professionals preparing for their next role.',
  keywords: 'interview prep, AI interview coach, tech interviews, developer interviews, interview practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
