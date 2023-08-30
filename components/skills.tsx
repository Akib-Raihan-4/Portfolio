"use client"
import React from 'react'
import SectionHeading from './section-heading'
import styles from './skills.module.css'
import { motion } from 'framer-motion'

interface SkillProps {
    nam: any; 
    x: any;   
    y: any;   
  }

  const Skill: React.FC<SkillProps> = ({ nam, x, y }) =>{
    return(
        <motion.div className={`${styles.circleRest} font-semibold  text-white p-8  cursor-pointer`}
        whileHover={{scale:1.25}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        >
            {nam}
        </motion.div>
    )
}


export const Skills = () => {
  return (
    <section className='mb-28 w-[80rem] text-center leading-8 sm:mb-8 scroll-mt-28' id='skills'>
        <SectionHeading>Skills</SectionHeading>
        <div className={`${styles.backgroundGrad}  h-[70vh] relative flex items-center justify-center rounded-full `}>
            <motion.div className={`${styles.circle} font-semibold  text-white p-8  cursor-pointer`}
            whileHover={{scale:1.25}}
            initial={{x:"0vw", y:"0vw"}}
            transition={{duration:1.5}}
            >
                PYTHON
            </motion.div>
            <Skill nam="JS" x="-4vw" y="-8.5vw"/>
            <Skill nam="HTML" x="-10vw" y="10.5vw"/>
            <Skill nam="ReactJS" x="17.5vw" y="0.5vw"/>
            <Skill nam="NextJS" x="17vw" y="-12.5vw"/>
            <Skill nam="CSS" x="-24vw" y="-1.5vw"/>
            <Skill nam="TF" x="10vw" y="16vw"/>
            <Skill nam="OpenCV" x="-22vw" y="-15vw"/>
            <Skill nam="JAVA" x="7vw" y="-21vw"/>
            <Skill nam="MySQL" x="-25vw" y="12vw"/>
            <Skill nam="SupaBase" x="-5vw" y="25vw"/>
            <Skill nam="Django" x="29vw" y="15vw"/>
            <Skill nam="C++" x="-11vw" y="-25vw"/>
            

        </div>
    </section>
  )
}
