"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';


const MotionLink = motion(Link)


export default function Intro() {
    

    return (
        <section className='mb-28 sm:max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem] flex' id='home'>
            <div className='flex sm:flex-row flex-col-reverse justify-center items-center'>
                <div className='w-full sm:w-[50%]  py-8 sm:py-0 flex justify-center'>
                    <motion.img
                        alt='Image'
                        src="/IntroPic.png"
                        width={400}
                        height={266}
                        className={`z-10 object-cover object-center rounded-lg shadow-xl w-[300px] h-[450px] sm:h-[566px] sm:w-[400px]`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.05,
                            rotateX: [10, -10],
                            rotateY: 25,
                            boxShadow: "-30px 15px 10px rgba(0, 0, 0, 0.74)",
                            transition: { duration: 2 }
                        }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className='sm:max-w-[50%] flex flex-col justify-center item-center'>
                    <div>
                        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-200'
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}>
                            <span className="font-bold">Hello World, I am Akib Raihan.</span> I am interested in{" "}
                            <span className="font-bold">full-stack web development</span> 
                            . I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}<span className="underline">React (Next.js)</span>.
                        </motion.p>
                    </div>
        
                    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{
                        delay:0.2
                    }}>
                        <motion.a href="#contact" className='group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none' 
                        whileHover={{
                            backgroundColor:["#374151", "#1f2937", "#374151"],
                            transition:{duration:2, repeat: Infinity}
                        }}>
                            Contact me here <BsArrowRight className= "opacity-50 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:text-[1.25rem] transition" />{" "}
                        </motion.a>
        
                        <motion.a href="/CV.pdf" download={true} className='group bg-[#f0f8ff] px-7 py-3 flex items-center gap-2 rounded-full outline-none'
                        whileHover={{
                            backgroundColor:["#f0f8ff","#f5f5f5"],
                            transition:{duration:1, repeat: Infinity}
                        }}> 
                            Download CV<HiDownload className="opacity-50 group-hover:translate-y-1 group-hover:opacity-100" /> 
                        </motion.a>
                        <div className='flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                            <a href="#" className='bg-white  text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none
                            focus:scale-110  hover:bg-gray-300 hover:text-gray-950 active:scale-105 border-black/10 transition'> 
                                <BsLinkedin/> 
                            </a>
                            <a href="#" className='bg-white  text-gray-700 text-[1.2rem] p-4 flex items-center gap-2 rounded-full outline-none
                            focus:scale-[1.15]  hover:bg-gray-300 hover:text-gray-950 active:scale-105 border-black/10 transition'> 
                                <FaGithub/> 
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
