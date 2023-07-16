import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({ weight:'500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CountryLookup - Explore Countries and Flags Worldwide',
    default: 'CountryLookup - Explore Countries and Flags Worldwide',
  },
  description: 'Discover comprehensive information about countries and their flags with CountryLookup. Search, browse, and explore countries effortlessly. Start your global journey today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="keywords" content="country lookup, country flags, country information, world countries, national flags, flag database, country search, global data, geography app"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
