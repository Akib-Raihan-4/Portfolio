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
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}