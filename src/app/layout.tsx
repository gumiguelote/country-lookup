import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { getAllCountries } from './service/api.service'
import { ICountry } from './interfaces/ICountry'
import ContextClientWrapper from './components/ContextClientWrapper'

const roboto = Roboto({ weight:'500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | CountryLookup - Explore Countries and Flags Worldwide',
    default: 'CountryLookup - Explore Countries and Flags Worldwide',
  },
  description: 'Discover comprehensive information about countries and their flags with CountryLookup. Search, browse, and explore countries effortlessly. Start your global journey today!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const countriesInitial: ICountry[] = await getAllCountries();

  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="keywords" content="country lookup, country flags, country information, world countries, national flags, flag database, country search, global data, geography app"></meta>
      <meta name="google-site-verification" content="yBgJwSX8_aLqHt3FLKW716mqNjyRW1PFA4jC-ryjGH8" />
      <body className={roboto.className}>
      <ContextClientWrapper countriesInitial={countriesInitial}>
          {children}  
      </ContextClientWrapper>
      </body>
    </html>
  )
}
