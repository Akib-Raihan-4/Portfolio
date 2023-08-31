"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';




const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev); // Toggle the mobile menu state
    };
    const [activeSection, setActiveSection] = useState('Home');
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
                    {/* Add a button for mobile menu */}
                    <button
                        className="sm:hidden bg-gray-800 text-gray-100 p-2 rounded-md absolute top-2 right-2"
                        onClick={() => toggleMobileMenu()} // Implement this function
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {isMobileMenuOpen && (
                        <div className="sm:hidden w-full bg-gray-800 text-gray-100 opacity-100 mt-12 py-2">
                            {links.map((link) => (
                                <motion.div
                                    key={link.hash}
                                    className="px-4 py-2 hover:bg-gray-700"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <Link
                                        className={clsx('hover:text-stone-400 transition', {
                                            'hover:text-white text-gray-950': activeSection === link.name,
                                        })}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            toggleMobileMenu(); // Close mobile menu on link click
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </ul>
            </nav>
        </motion.div>
    )
}

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
