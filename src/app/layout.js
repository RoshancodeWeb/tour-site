import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel App',
  description: 'Travel App Created By Roshan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='overflow-hidden'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
