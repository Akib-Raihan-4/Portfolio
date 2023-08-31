import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Intro from '@/components/intro'
import { Cabin_Sketch } from 'next/font/google'
import Image from 'next/image'
import styles from './body.module.css'

const cabin = Cabin_Sketch({
    weight:['700', '400'],
    subsets: ["latin"],
    variable: "--font-cabin",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Akib | Portfolio',
  description: 'Akib | Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} 
      bg-gray-900 text-gray-950 relative h-[1000rem] pt-28 sm:pt-36 w-full`}>

        {/* <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]'></div>

        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div> */}

        <Header/>
        {children}
      </body>
    </html>
  )
}
