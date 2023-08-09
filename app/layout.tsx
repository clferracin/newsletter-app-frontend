import { DefaultProviders } from '@/components/default-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    subsets: ['latin'], 
    weight: ['600','400', '300'] 
  })

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'by Cesar Ferracin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DefaultProviders>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
