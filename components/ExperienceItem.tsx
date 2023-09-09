"use client";
import React from 'react';
import {experiencesData} from '@/lib/data'
import styles from './CSS/experience.module.css'
import Image from 'next/image'
type ExperienceProps = (typeof experiencesData)[number];

export const ExperienceItem = ({
    title,
    description,
    date,
    imageUrl}:ExperienceProps) => {

    return (
        <div className={`${styles.cardBody}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.image}`}>
                    <Image src={imageUrl} alt={title} quality={95}/>
                </div>
                
               
                <div className={`${styles.details}`}>
                    <div className={`${styles.center}`}>
                        <h1>{title}<br /></h1>
                        <p>{description}</p>
                        ({date})
                    </div>
                </div>
            </div>
        </div>
    );
};
