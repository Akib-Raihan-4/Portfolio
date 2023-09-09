"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import SectionHeading from './section-heading'
import styles from './CSS/skills.module.css'
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

const skills = [
  'JavaScript',
  'CSS',
  'HTM',
  'Python',
  'C++',
  'ReactJS',
  'NextJS',
  'TensorFlow',
  'OpenCV',
  'Java',
  'MySQL',
  'Django',
];

const MobileSkills = () => {
  return (
    <div className="py-12">
      <div className="flex justify-center">
        <div className="w-80 flex overflow-x-auto py-4 overflow-hidden scrollbar-hide">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-full  text-center m-2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-80 h-80 bg-gray-900 rounded-full">
                <div className={`${styles.ball} ${styles.bubble} pt-12`}>
                  <div className={`${styles.skillcontent} pt-14`}>{skill}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};





const DesktopSkills = () => {

  return (
    <div className={`${styles.backgroundGrad} w-[77rem] h-[57rem] relative flex items-center justify-center rounded-full`}>
            <motion.div className={`${styles.circle} font-semibold  text-white p-8  cursor-pointer`}
            whileHover={{scale:1.25}}
            initial={{x:"0vw", y:"0vw"}}
            transition={{duration:1.5}}
            >
                PYTHON
            </motion.div>
            <Skill nam="JS" x="-80px" y="-125px"/>
            <Skill nam="HTML" x="-150px" y="175px"/>
            <Skill nam="ReactJS" x="390px" y="0.5vw"/>
            <Skill nam="NextJS" x="265px" y="-215px"/>
            <Skill nam="CSS" x="-380px" y="35px"/>
            <Skill nam="TF" x="170px" y="250px"/>
            <Skill nam="OpenCV" x="-354px" y="-235px"/>
            <Skill nam="JAVA" x="115px" y="-345px"/>
            <Skill nam="MySQL" x="-405px" y="290px"/>
            <Skill nam="SupaBase" x="-55px" y="355px"/>
            <Skill nam="Django" x="473px" y="250px"/>
            <Skill nam="C++" x="-187px" y="-410px"/>
        </div>
  )
}


export const Skills = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth <= 1260
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1260);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className='mb-28 max-w-[80rem] text-center leading-8 sm:mb-8 scroll-mt-28 overflow-x-hidden' id='skills'>
        <div className='pt-[6rem] sm:pt-0 '></div>
        <SectionHeading>Skills</SectionHeading>
        <div className='sm:pb-[6rem] '></div>
        {isMobile ? <MobileSkills /> : <DesktopSkills />}
        
        
    </section>
  )
}
