"use client"

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from './CSS/project.module.css'
import { useMediaQuery } from 'react-responsive';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    href,
    imageUrl}:ProjectProps)
    {
        const ref = useRef<HTMLDivElement>(null)
        const {scrollYProgress} = useScroll({
            target: ref,
            offset:["0 1", "1.1 1"]
        })
        const isMobile = useMediaQuery({ maxWidth: 680 });
    return(
        <motion.div 
         ref= {ref}
         style={{
            scale: scrollYProgress,
            opacity:scrollYProgress,
        }}>
            <motion.div className={`${styles.container}`}>
                <div className={`${styles.card} bg-gray-900`}>
                    <div className={`${styles.imgBx}`}>
                        <Image src={imageUrl} alt={title} quality={95} className={`${styles.img}`}/>
                    </div>
                    <div className={` ${isMobile ? styles.mobileContent : styles.content}`}>
                        <a href={href} target='blank'>  
                            <h2 className='font-extrabold text-[#220824] pb-3'>{title}</h2>
                        
                            <p className='font-semibold text-[#0e0b31]'>{description}</p>
                        </a>
                        <ul className="flex flex-wrap pt-8 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                            <li
                                className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}