import React from 'react'
import { Cabin_Sketch } from 'next/font/google'

const cabin = Cabin_Sketch({
    weight:['700','400'],
    subsets: ["latin"],
    variable: "--font-cabin",
})

type SectionHeadingProps ={
    children: React.ReactNode
}

export default function SectionHeading({
    children} : SectionHeadingProps
    ) {
  return (
    <h2 className={`text-5xl font-medium capitalize mb-8 text-center text-gray-200`}>
        {children}
    </h2>
  )
}
