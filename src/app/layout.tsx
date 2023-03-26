import '../styles/globals.css'

export const metadata = {
  title: 'Amazon Clone',
  description: 'This is an amazon clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
