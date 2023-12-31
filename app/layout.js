import Footer from './Footer'
import Headers from './Headers'
import { NextAuthProvider } from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yourToDos',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <Headers />
        <div className='container mx-auto my-5 min-h-screen'>
          {children}
        </div>
        <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
