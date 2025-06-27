export const metadata = {
  title: 'Handicrafts Workshop',
  description: 'Explore Lippan, Madhubani, Warli and more!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
