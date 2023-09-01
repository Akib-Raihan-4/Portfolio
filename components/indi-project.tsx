"use client"

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from './project.module.css'

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl}:ProjectProps){
    

    return(
        

        <div className={`${styles.container}`}>
            <div className={`${styles.card} bg-gray-900`}>
                <div className={`${styles.imgBx}`}>
                    <Image src={imageUrl} alt={title} quality={95} className={`${styles.img}`}/>
                </div>
                <div className={`${styles.content}`}>
                    <h2 className='font-extrabold text-[#220824] pb-3'>{title}</h2>
                    <p className='font-semibold text-[#0e0b31]'>{description}</p>
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
        </div>
    )
}