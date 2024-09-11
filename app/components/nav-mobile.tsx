'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { navItems } from 'app/utils/constants';
import Logo from './logo';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden mb-8 lg:mb-16 tracking-tight flex items-end justify-between">
            <Logo />
            <button onClick={handleClick}
                className="cursor-pointer absolute top-0 right-0 px-8 py-8 z-100">
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`
                } >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out
                h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
                </span>
            </button >

            {isOpen && (
                <section className="lg:hidden cursor-pointer pr-5 z-10 fixed w-full h-screen top-0 left-0 bg-white flex flex-col justify-evenly items-center">
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        {Object.entries(navItems).map(([path, { name }], index) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={`hover:text-zinc-400 dark:hover:text-zinc-700 flex align-middle relative py-1 px-2 m-1`}
                                    style={{ animationDelay: `${index}00ms` }}
                                >
                                    <span className='flex gap-2'><strong>0{index + 1}.</strong>{name}</span>

                                </Link>
                            )
                        })}
                    </ul>
                </section>
            )}
        </div>

    )
};

export default NavMobile;