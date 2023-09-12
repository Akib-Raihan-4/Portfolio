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
            <div className='pt-14 flex flex-col gap-10 md:flex-row justify-between items-center'>
                <div className='max-w-[50rem] sm:pr-[7rem] sm:pt-20 px-8'>
                        <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                            My journey in the world of technology began with a simple fascination for coding, and it has evolved into a relentless pursuit of creating innovative solutions.
                        </p>
                        <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                            I thrive on the challenges of <span className='font-extrabold'>Full Stack Web Development</span> , where I blend creativity and technical expertise to craft exceptional digital experiences. My toolkit includes <span className='font-bold'>TypeScript, JavaScript, and Python</span> , and I&apos;m well-versed in frameworks like <span className='font-bold'>Next.js, Django, and Node.js.</span>
                        </p>
                        <p className={`font-sans mb-3 text-[1.2rem] text-white`}>
                            Beyond web development, I have a deep-rooted interest in <span className='font-extrabold'>Artificial Intelligence and Machine Learning.</span> I find immense joy in building AI/ML models and diving into data-driven problem-solving. I&apos;m proficient in libraries such as <span className='font-bold'>TensorFlow, Keras, Scikit-learn,Nltk</span>  and essential data manipulation tools like  <span className='font-bold'>NumPy and Pandas</span>.
                        </p>
                </div>
                <div className={`${styles.box}`}>
                    <div className={`${styles.content} `}>
                            <img src="/AboutPic.png" alt=""  />
                            <h2>Akib Raihan <br /><span>Web Developer</span></h2>
                            <a href="#contact">Hire Me</a>
                    </div>
                </div>
                
            </div>
            
        </motion.section>
    );
}

