"use client"
import React from 'react'
import styles from './about.module.css'
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export const AboutNew = () => {
    return (
        <motion.section className='mb-28 max-w-[80rem] text-center leading-8 sm:mb-8 scroll-mt-28'
        initial={{opacity:0, y:100}}
        animate= {{opacity:1, y:0}}
        transition={{
            delay:0.4
        }} id='about'>
            <SectionHeading>About Me</SectionHeading>
            <div className='pt-14 flex justify-between'>
            <div className='max-w-[50rem] pr-[7rem] pt-16'>
                    <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nemo beatae magnam dolorem ab placeat unde nostrum, odio ipsum sint dolorum perspiciatis ex eos voluptate, nobis voluptatem quasi cum temporibus!
                    </p>
                    <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellendus a velit in vero corrupti laboriosam! Ex voluptates quasi earum molestias totam rem culpa, sequi, possimus animi repudiandae nam nesciunt!
                    </p>
            </div>
                <div className='w-full sm:w-[50%] flex justify-center py-8 sm:py-0'>
                    <div className={styles.outerCircleWrapper}>
                        <div className={styles.innerCircle}>
                            <div className={styles.circleImage}></div>
                            <div className={`${styles.borderSection} ${styles.section1}`}></div>
                            <div className={`${styles.borderSection} ${styles.section2}`}></div>
                            {/* Add more sections as needed */}
                        </div>
                        <div className={styles.outerCircle}>
                            <div className={`${styles.borderSection} ${styles.section3}`}></div>
                            <div className={`${styles.borderSection} ${styles.section4}`}></div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {/* Rest of your content */}
        </motion.section>
    );
}

