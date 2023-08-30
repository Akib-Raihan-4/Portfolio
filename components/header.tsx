"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
    const [activeSection, setActiveSection] = useState('Home');

    const transition = {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
    };

    return (
        <header className='z-[999] relative'>
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
        </header>
    );
}
