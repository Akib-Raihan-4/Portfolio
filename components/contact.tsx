"use client"

import React, {useState} from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
    >
        <SectionHeading>Contact Me</SectionHeading>
        <motion.div
         initial={{
            opacity: 0,
            scale:0.5
          }}
          whileInView={{
            opacity: 1,
            scale:1
          }}
          transition={{
            duration: 2,
          }}>

            <form className='mt-10 flex flex-col'
            >
                <input className='h-14 px-4 rounded-lg transition-all'
                name='name'
                type='name'
                maxLength={500}
                placeholder='Your Name'
                required
                />
                <input className='h-14 px-4 my-6 rounded-lg transition-all'
                name='email'
                type='email'
                maxLength={500}
                placeholder='Your Email'
                required
                />
                <textarea className='h-52 rounded-lg p-4 transition-all'
                name= "message"
                placeholder='Your Message'
                required
                maxLength={5000}
                />
                <button type="submit" className="py-3 px-5 mt-6 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
            </form>
        </motion.div>


    </section>
  )
}
