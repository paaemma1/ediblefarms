import './globals.css'

export const metadata = {
  title: "Edible Farms",
  description: "Premium Catfish Farming"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
