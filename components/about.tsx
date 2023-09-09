"use client"
import React from 'react'
import styles from './CSS/about.module.css'
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export const About = () => {
    return (
        <motion.section className='mb-28 sm:max-w-[80rem] text-center leading-8 sm:mb-8 scroll-mt-28'
        initial={{opacity:0, y:100}}
        animate= {{opacity:1, y:0}}
        transition={{
            delay:0.4
        }} id='about'>
            <SectionHeading>About Me</SectionHeading>
            <div className='pt-14 flex flex-col gap-10 sm:flex-row justify-between items-center'>
                <div className='max-w-[50rem] sm:pr-[7rem] sm:pt-20 px-8'>
                        <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nemo beatae magnam dolorem ab placeat unde nostrum, odio ipsum sint dolorum perspiciatis ex eos voluptate, nobis voluptatem quasi cum temporibus!
                        </p>
                        <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellendus a velit in vero corrupti laboriosam! Ex voluptates quasi earum molestias totam rem culpa, sequi, possimus animi repudiandae nam nesciunt!
                        </p>
                </div>
                <div className={`${styles.box}`}>
                    <div className={`${styles.content} `}>
                            <img src="/AboutPic.png" alt=""  />
                            <h2>Someone Famous <br /><span>Web Developer</span></h2>
                            <a href="#">Hire Me</a>
                    </div>
                </div>
                
            </div>
            
        </motion.section>
    );
}

