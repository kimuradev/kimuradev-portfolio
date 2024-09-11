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
        <header className="lg:hidden mb-8 lg:mb-16 tracking-tight flex items-end justify-between transition-opacity">
            <Logo />
            <button onClick={handleClick}
                className="cursor-pointer absolute top-0 right-0 px-8 py-8 z-10">
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
                <section className="flex lg:hidden cursor-pointer pr-5">
                    <div className={'fixed w-full h-screen top-0 left-0 bg-white flex flex-col justify-evenly items-center'}>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            {Object.entries(navItems).map(([path, { name }], index) => {
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                                    >
                                        <span className='flex gap-2'><strong>0{index + 1}.</strong>{name}</span>

                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            )}
        </header>

    )
};

export default NavMobile;