"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig  } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

// Mobile View 

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const MobileNav = () => {
    const [mobileNav, setMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};
    const closeMobileNav = () => {
        setMobileNav(false);
      };
    return (
		<header className="fixed top-0 inset-x-0 p-6 bg-gray-800/40 ">
			<nav className="pl-[20rem]">
				<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 relative z-10"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
				</motion.button>
				<AnimatePresence>
					{mobileNav && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "-100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed inset-0 bg-gray-800  flex flex-col pt-[5rem]  space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>
                                    {links.map(link => (
                                        <li className='pl-[1.5rem]' key={link.hash} >
                                            <Link href={link.hash} className="text-4xl font-semibold text-white "
                                             onClick={closeMobileNav}>
                                                {link.name}
                                            </Link>
                                        </li>

                                    ))}

								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div>
                                <motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex pl-[1.5rem] gap-x-4"
								>
									<li>
                                        <a href="#" className=' text-white '> 
                                            <BsLinkedin size={30}/> 
                                        </a>
									</li>
									<li>
                                        <a href="#" className=' text-white '> 
                                            <FaGithub size={30}/> 
                                        </a>
									</li>
									<li>
                                        <a href="#" className=' text-white '> 
                                            <SiGmail size={30}/> 
                                        </a>
									</li>
								</motion.ul>
								
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}



// Destop View

const DesktopNav = () => {
    const [activeSection, setActiveSection] = useState('Home');
    const transition = {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
    };
    return(
        <motion.div
            className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-gray-600 border-opacity-40 bg-gray-800 bg-opacity-80 shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
        >
            <nav
                className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1rem] sm:h-[initial] sm:py-0'
            >
                <ul
                    className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-100 sm:w-[initial] sm:flex-nowrap sm:gap-5 '
                >
                    {links.map(link => (
                        <motion.li
                            key={link.hash}
                            className='h-1/2 flex items-center justify-center relative'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx('flex w-full items-center justify-center px-3 hover:text-stone-400 transition', {
                                    'hover:text-white text-gray-950 ': activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={() => setActiveSection(link.name)}
                            >
                                {link.name}
                            </Link>
                            {link.name === activeSection && (
                                <motion.span
                                    className="bg-gray-400 rounded-full absolute left-0 w-full h-[2.5rem] z-[-1]"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={transition}
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    )
}




export default function Header() {
    
    const [isMobile, setIsMobile] = useState<boolean>(
        typeof window !== 'undefined' && window.innerWidth <= 768
      );
    
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
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
        <header className='z-[999] relative'>
            
                {isMobile ? <MobileNav /> : <DesktopNav />}
            
        </header>

    );
}